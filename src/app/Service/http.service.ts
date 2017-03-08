import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs";
@Injectable()
export class HttpService {
 private homeUrl:string='http://apiv2.liad.com.au/';

  constructor(private http:Http) { }
  postMethodLogin(name,pwd){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    let options=new RequestOptions({headers:headers})
    let url='http://apiv2.liad.com.au/account/login';
    const obj=JSON.stringify({'username':name,'password':pwd,'mode':'WEB'});
    console.log(obj)
  return this.http.post(url,obj,options)
    .map((data:Response)=>data.json())
    .catch(this.errorHand)
  }
  postMethod(){
  let data=this.commonService('inventory/loc/list');
  return this.http.post(data.url,'{}',{headers:data.hearders})
    .map((data:Response)=>data.json())
    .catch(this.errorHand)
  }

  private commonService(url:string):any{
        let header=new Headers();
                  header.append('authorization',localStorage.getItem('auth'));
                  header.append('Content-Type', 'application/json');
        return{
          url:this.homeUrl+url,
          hearders:header
        }
  }
  getMethod(){
    let data=this.commonService('job');
    let params:URLSearchParams=new URLSearchParams();
                params.set('jobid','JOBPBMhxRiXI');

    let options = new RequestOptions({ headers: data.hearders, search: params });
    return this.http.get(data.url,options)
      .map((data:Response)=>data.json())
      .catch(this.errorHand)
  }

private errorHand(error:any){
  console.log(error)
  return Observable.throw(error.json())
  }

}
