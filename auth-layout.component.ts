import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener, Inject, OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {Menus} from "../../../shared/service/menu-items";
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'underscore';
import * as $ from 'jquery';
import {fade_enter, fadeSpeed, RouterAnimation} from "../../../shared/service/animation.service";
import {DOCUMENT} from "@angular/platform-browser";
import {CommonService} from "../../../shared/service/common.service";
import * as moment from 'moment'
import {ApiurlService} from "../../../shared/service/apiurl.service";
import {SessionSecureService} from "../../../shared/service/session.secure.service";
import { Location } from '@angular/common';
import {ToastService} from "../../../shared/service/toast.service";
@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  animations:[RouterAnimation,fadeSpeed,fade_enter],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent implements OnInit,OnDestroy,AfterViewInit {
  logPosLeft = 63;
  childData: Array<object>;
  isNeedSupMenu = false;
  @ViewChild('tabMenu', {read: ElementRef}) tabMenu;
  @ViewChild('fixedauthheader') fixedauthheader;
  @ViewChild('lgbutton',{read:ElementRef}) lgbutton;
  @ViewChild('navconatiner',{read:ElementRef}) navconatiner;
  tabPosition: Object;
  menuList;
  selectIndex: number;
  router: any;
  selectedRoute: number;
  logoutsubmenu=false;
  popup=false;
  navshadow:boolean=false
  notires;
  nopading;
  alive:boolean=false
  fillwithother:boolean=false


  abscon=0
  @HostListener('document:click', ['$event'])
  closePopup(event) {
    if (this.isNeedSupMenu)
      this.isNeedSupMenu = false
    if (this.logoutsubmenu)
      this.logoutsubmenu = false
    if(event.target['id'] !=='logout'){
        this.logapi()
    }
  }
  @HostListener('scroll',['$event'])
  onScroll(){
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(number > 50){
      this._renderer.addClass(this.fixedauthheader.nativeElement,'stick')
    }
    else {
      this._renderer.removeClass(this.fixedauthheader.nativeElement,'stick')
    }
  }
  logapi(){
    let diffhour=180
    let lcdb=JSON.parse(localStorage.getItem('db'));
    if(lcdb && lcdb.length > 0)
    for (let val of lcdb){
      let now = moment(new Date());//now
      let old = moment(val.time);

      // console.log(val.id,now.diff(old, 'minutes'))
      if(now.diff(old, 'minutes') > diffhour){
        this.hitapi(val.id)
      }
    }
  }
  hitapi(id){
    switch (id){
      case 'dashboard':this.getdashboard()
            break;
      case 'shipment_list':this.getshipment()
            break;
      case 'invo_list':this.getinv()
            break;
      case 'quote_list':this.getquot()
            break;
      case 'csreport_list':this.getcsreport()
            break;

    }
  }
  getcsreport(){
    let obj={
      username:localStorage.getItem('user_name'),
      limit:'',
      index:'',
      search_key:'',
      search_value:'',
      sort_by:'',
      report_type:'',
      origin:'',
      destination:'',
      from_date:'',
      to_date:'',
      shipment_type:'',
      shipment_by:'',
      over_due:'',
      shipper:'',
      consignee:'',
      status:'',
      clearance:''
    }
    this.apiserv.creport(obj)
      .toPromise()
      .then(resp => {
        if (resp.json().statuscode == 200) {
          let res = resp.json()
          if (res['reportdetails'].length > 0) {
            this.makeDataRsp(res['reportdetails'],'csreport_list')
          }
        }

      })

  }


  getquot(){
    let obj={
      'username':localStorage.getItem('user_name'),
      'limit':'',
      'index':'0',
      'search_key':'',
      'sorting_key':'',
      'sort_by':'',
      'origin':'',
      'destination':'',
      'from_date':'',
      'to_date':'',
      'shipment_type':'',
      'shipment_by':'',
      'customer':''
    };
    this.apiserv.quotesList(obj)
      .toPromise()
      .then(resp=>{
        if(resp.json().statuscode == 200){
          let quot=resp.json()
          if(quot['quoteslist'].length > 0){
            this.makeDataRsp(quot,'quote_list')
          }
        }
      })

  }
  getinv(){
    let obj={
      'username':localStorage.getItem('user_name'),
      'limit':'',
      'index':'0',
      'search_key':'',
      'sorting_key':'',
      'sort_by':'',
      'origin':'',
      'destination':'',
      'from_date':'',
      'to_date':'',
      'shipment_type':'',
      'shipment_by':'',
      'customer':'',
      over_due:''
    };
    this.apiserv.invList(obj)
      .toPromise()
      .then(resp=>{
        if(resp.json().statuscode == 200){
          let inv=resp.json()
          if(inv['invoicelist'].length > 0){
            this.makeDataRsp(inv,'invo_list')
          }
        }
      })

  }
  getdashboard(){
    let obj={
      username:localStorage.getItem('user_name'),
      shipment_limit:5,
      quote_limit:5,
      invoice_limit:5
    }
    this.apiserv.dashboarddata(obj)
      .toPromise()
      .then(resp=>{
        if(resp.json().statuscode == 200){
          this.makeDataRsp(resp.json()['dashboarddetails'],'dashboard')
        }
      })
  }

  getshipment(){
    let obj={
      username:localStorage.getItem('user_name'),
      limit:'',
      index:'',
      search_key:'',
      search_value:'',
      sort_by:'',
      origin:'',
      destination:'',
      from_date:'',
      to_date:'',
      shipment_type:'',
      status:'',
      shipment_by:'',
      consignee:'',
      shipper:''
    }
    this.apiserv.shipmentList(obj)
      .toPromise()
      .then(resp => {
        if (resp.json().statuscode == 200) {
          let res = resp.json()
          if (res['shipmentdetail'].length > 0) {
            this.makeDataRsp(res['shipmentdetail'],'shipment_list')
          }
        }
      })
  }
  makeDataRsp(data,id){
    let lc=JSON.parse(localStorage.getItem('db'))
    let dash = {
      'data': data,
      'time': new Date(),
      'id': id
    }
    if(!lc || lc.length ==0 ) {
      let dash1 = [{
        'data': data,
        'time': new Date(),
        'id': id
      }]

      localStorage.setItem('db', JSON.stringify(dash1))
    }
    else{
      let respobj = _.findIndex(lc, {id: id})
      if(respobj > -1){
        lc.splice(respobj,1)
      }
      lc.push(dash)
      localStorage.setItem('db', JSON.stringify(lc))
    }
  }



  constructor(private menuItems: Menus,
              private _renderer: Renderer2,
              private activatedRoute: ActivatedRoute,
              private routerLink: Router,
              private def:ChangeDetectorRef,
              private common:CommonService,
              private apiserv:ApiurlService,
              private location: Location,
              private toast:ToastService,
              private ss:SessionSecureService,
              @Inject(DOCUMENT) private document: Document) {
    document.body.style.backgroundColor = "#ebeff2";
    console.log('version : v1.01')
   }

  ngOnInit() {
    this.def.reattach()
    this.menuList = this.menuItems.getAllMenu()
    this.selectedRoute = 2;
    let currentPath = this.activatedRoute.snapshot.firstChild.url[0].path
    this.selectedRoute = _.findIndex(this.menuList, {state: currentPath})

    if(!localStorage.getItem('user_token')){
      this.hitfromhead()
    }
    else{
      this.notires=JSON.parse(localStorage.getItem('notification_list'))
      this.alive=true
      this.fillwithother=false
    }

  }
  hitfromhead(){

    if(this.activatedRoute.snapshot.firstChild.url[0].path==='dashboard') {
      this.activatedRoute.queryParams
        .subscribe(params => {
          if(this.activatedRoute.snapshot.firstChild.url[0].path==='dashboard') {
            if (Object.keys(params).length > 0) {
              let obj = {
                username: params['userid'],
                password: params['usertoken']
              }
              this.location.replaceState('/dashboard');
              this.loginForm(obj)
            }
            else {
              window.open('http://freightsystems.com/', '_self')
            }
          }

        });
    }
    else{
      window.open('http://freightsystems.com/','_self')
    }
  }
  errorMessage(err){
    localStorage.clear()
    sessionStorage.clear()
    this.toast.reqError(err)
    // this._router.navigate(['/'])
    window.open('http://freightsystems.com/','_self')
  }
  loginForm(data){
    this.location.replaceState('/dashboard') ;
    if(!data.username && !data.password)
    {
      this.errorMessage('Please enter username and password')
      return
    }
    if(!data.username)
    {
      this.errorMessage('Please enter username')
      return
    }
    if(!data.password){
      this.errorMessage('Please enter password')
      return
    }
    let complete=true
    this.fillwithother=true
    this.apiserv.login(data)
      .toPromise()
      .then((response)=>{
        let res=response.json()
        if(res.statuscode==200){
          localStorage.setItem('user_token',res.usertoken.trim())
          localStorage.setItem('user_detail',JSON.stringify(res.userdetails))
          localStorage.setItem('user_name',data['username'].trim())
          localStorage.setItem('user_id',res['userid'].trim())
          this.ss.storeallData()
            .subscribe(logdata=>{
                if(logdata[0].json().statuscode==200) {
                  localStorage.setItem('portmaster', JSON.stringify(logdata[0].json().portmaster))
                }
                else{
                  this.errorMessage(logdata[0].json().statusmessage)
                  complete=false
                }
                if(logdata[1].json().statuscode==200) {
                  localStorage.setItem('consignee_list', JSON.stringify(logdata[1].json().consigneelist))
                }
                else{
                  this.errorMessage(logdata[1].json().statusmessage)
                  complete=false
                }
                if(logdata[2].json().statuscode==200) {
                  localStorage.setItem('shipper_list', JSON.stringify(logdata[2].json().shipperlist))
                }
                else {
                  this.errorMessage(logdata[2].json().statusmessage)
                  complete=false
                }
                if(logdata[3].json().statuscode==200) {
                  localStorage.setItem('notification_list', JSON.stringify(logdata[3].json()))
                }
                else{
                  this.errorMessage(logdata[3].json().statusmessage)
                }
              },
              err=>{
                this.errorMessage(err.statusText)
                complete=false
              },
              ()=>{
                if(complete){
                  this.fillwithother=false
                  this.alive=true
                  this.notires=JSON.parse(localStorage.getItem('notification_list'))
                  this.def.markForCheck()
                  // this._router.navigate(['/dashboard'])

                }
              })
        }
        else{
          this.errorMessage(res.statusmessage)
          complete=false
        }
      })
      .catch((error)=>{
        this.errorMessage(error.statusText)
        complete=false
      })



  }



  ngAfterViewInit(){
    let elem=$(this.navconatiner.nativeElement).find('.mat-drawer-content')
    elem.scroll(()=>{
      $('.custooltip').remove();
      let number=elem.scrollTop()
      if(number > 50){
        this.navshadow=true
        this._renderer.addClass(this.fixedauthheader.nativeElement,'stick')
      }
      else {
        this.navshadow=false
        this._renderer.removeClass(this.fixedauthheader.nativeElement,'stick')
      }
      // console.log(ev.)
    })

  }


  private getPosition(event, tab) {
    // console.log(event.state)
    let obj = event;
    if (this.isNeedSupMenu)
      this.isNeedSupMenu = false
    if (obj.type == 'sub') {
      setTimeout(() => {
        let element = $(tab)
        let pos = $(element).position()
        let height = $(element).height()
        let top = pos.top + height
        let left = pos.left + this.logPosLeft;
        this.childData = obj.children;
        this.tabPosition = {
          top: top + 65 + 'px',
          left: left + 'px'
        }
        this.selectIndex = 0;
        this.isNeedSupMenu = true
        this.def.markForCheck()
      }, 0)
    }
    else {
      this.routerNav(obj.state, obj.child)
    }
  }

  private routerNav(url, child,param?) {
    if (this.isNeedSupMenu)
      this.isNeedSupMenu = false;
    if(url=='shipment'){
      if(localStorage.getItem('shipLast')) {
        let urlTree = this.routerLink.parseUrl(localStorage.getItem('shipLast'));
        let urlWithoutParams = urlTree.root.children['primary'].segments.map(it => it.path).join('/');
        this.routerLink.navigate([urlWithoutParams])
        return
      }
    }
    if(url=='report'){
      if(localStorage.getItem('bookingLast')) {
        let urlTree = this.routerLink.parseUrl(localStorage.getItem('bookingLast'));
        let urlWithoutParams = urlTree.root.children['primary'].segments.map(it => it.path).join('/');
        this.routerLink.navigate([urlWithoutParams])
        return
      }
    }
  if(param) {
    this.routerLink.navigate(['/' + url, child, param]);
    return;
  }
    if (child) {
      this.routerLink.navigate(['/' + url, child]);
    }
    else {
      this.routerLink.navigate(['/' + url])
    }
  }

  isActive(link) {
    if (link == this.activatedRoute.snapshot.firstChild.url[0].path) {
      this.nopading=this.activatedRoute.snapshot.firstChild.url[0].path
      return true;
    }
    else {
      if (this.activatedRoute.snapshot.firstChild.url[0].path == 'profile')
        $(this.tabMenu.nativeElement).find('.mat-ink-bar').css({'visibility': 'hidden'})
      return false
    }

  }
  ngOnDestroy(){
    this.def.detach()
  }
  applogout(){
    localStorage.clear()
    sessionStorage.clear()
    window.open('http://freightsystems.com/','_self')
    // this.routerLink.navigate(['/login'])
  }
  changereadcount(){
    if(this.navshadow)
      this._renderer.addClass(this.fixedauthheader.nativeElement,'stick')
    this.notires['unreadcount']=0
    this.notires['notification'].map(val=>val.readStatus='True')
    localStorage.setItem('notification_list',JSON.stringify(this.notires))
  }
  changeread(){
    if(!this.notires)
    this.notires=JSON.parse(localStorage.getItem('notification_list'))
    if(this.navshadow)
      this._renderer.removeClass(this.fixedauthheader.nativeElement,'stick')
    this.notires['unreadcount']=0
  }
  openlog(){
    if(!this.logoutsubmenu)
    setTimeout(()=>{
      this.logoutsubmenu=true
      this.def.markForCheck()},0)

  }
  loaddsrreport(){
    let url=`http://freightsystems.com/MyReport/List/?user_id=${localStorage.getItem('user_id')}&id=${localStorage.getItem('user_token')}&Type=ADMSCRIPT`
    // console.log(url)
    window.open(url)
  }

  worldapiHit(){

  }


}
