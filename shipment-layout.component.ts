import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {
  columns, consignee, daterange,
  destination,
  filter,
  fsstatus,
  origin, selected,
  shipmentby,
  shipmenttype, shipper,
  showby
} from "../../shared/service/shipment.service";
import {Http} from "@angular/http";
import {CommonService} from "../../shared/service/common.service";
import {ShipmentService} from "./shipment.service";
// import 'rxjs/add/operator/takeWhile';
import {fadeSpeed} from "../../shared/service/animation.service";
import {Router} from "@angular/router";
import {FilterService} from "../../shared/service/filter.service";
import {GoogleAnalyticsEventsService} from "../../shared/service/analytics.service";
import {ToastService} from "../../shared/service/toast.service";
// import {IntervalObservable} from "rxjs/observable/IntervalObservable";

import * as _ from 'underscore'
@Component({
  selector: 'app-shipment-layout',
  templateUrl: './shipment-layout.component.html',
  styleUrls: ['./shipment-layout.component.scss'],
  animations:[fadeSpeed],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ShipmentLayoutComponent implements OnInit,OnDestroy {
  load=true
  fsdropdown=showby
  fsfilter=filter
  fscolumns=columns
  servererror:boolean=false
  fssubfilter={
    shipmentby:shipmentby,
    shipmenttype:shipmenttype,
    origin:origin,
    destination:destination,
    fsstatus:fsstatus,
    consignee:consignee,
    shipper:shipper,
    daterange:daterange
  }
  fsselected=selected;
  response;
  shipment;
  abscon=0;
  alive:boolean=true
  norecordmsg:boolean=false;

  constructor(private _http:Http,
              private common:CommonService,
              private shipserv:ShipmentService,
              private filterServ:FilterService,
              private def:ChangeDetectorRef,
              private ga:GoogleAnalyticsEventsService,
              private toast:ToastService,
              private router:Router) { }
  ngOnInit() {
    this.def.reattach()
    let ispo=JSON.parse(localStorage.getItem('user_detail'))['isPO']
    if(ispo && ispo.toLowerCase() == 'true'){
      this.fsselected['dropdown']=2
    }else{
      this.fsselected['dropdown']=1
    }
    let lc=JSON.parse(localStorage.getItem('db'))
    if(lc && lc.length > 0) {
      let respobj = _.findWhere(lc, {id: 'shipment_list'})
      if(respobj && respobj['data']){
        setTimeout(()=>{
          this.load=false
          if(respobj['data'].length === 0){
            this.norecordmsg=true
          }
          else{
            this.norecordmsg=false
          }
          this.def.markForCheck()
        },1000)
      }
      else{
        this.getresponse()
      }
    }
    else{
      this.getresponse()
    }


  }

  makeDataRsp(data){

    let lc=JSON.parse(localStorage.getItem('db'))
    let dash = {
      'data': data,
      'time': new Date(),
      'id': 'shipment_list'
    }
    if(!lc || lc.length ==0 ) {
      let dash1 = [{
        'data': data,
        'time': new Date(),
        'id': 'shipment_list'
      }]
      localStorage.setItem('db', JSON.stringify(dash1))
    }
    else{
      let respobj = _.findIndex(lc, {id: 'shipment_list'})
      if(respobj > -1){
        lc.splice(respobj,1)
      }
      lc.push(dash)
      localStorage.setItem('db', JSON.stringify(lc))
    }
    this.load = false;
    let respobj1 = _.findWhere(lc, {id: 'shipment_list'})
    if(respobj1['data'] && respobj1['data'].length === 0){
      this.norecordmsg=true
    }
    else{
      this.norecordmsg=false
    }
    this.def.markForCheck()
  }

  errorcont(msg,error405){

  if(this.router.url.includes('/shipment/list')
     || this.router.url.includes('/shipment/datatable')) {
    this.load = false
    this.servererror = error405
    this.toast.reqError(msg)
    this.def.markForCheck()
  }
  }
  getresponse(){
    this.load=true
    this.servererror=false

    this.shipserv.getshipmentlist()
      .toPromise()
      .then(resp => {
        if (resp.json().statuscode == 200) {
          let res = resp.json()
          if (res['shipmentdetail'].length > 0) {
            this.makeDataRsp(res['shipmentdetail'])
          }
        }
        else {
          this.errorcont(resp.json().statusmessage, false)
        }
      })
      .catch(err => {
        console.log('Invalid Json')
        console.log('Error : ' +err)
        this.errorcont(err.statusText, true)
      })

  }

  exportexcel(){
    this.ga.emitEvent('Export','Download','Shipment',10);
    this.filterServ.exportjsonfun()
  }

  ngOnDestroy(){
    this.def.detach()


  }



}
