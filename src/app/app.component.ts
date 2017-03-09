import { Component,OnInit } from '@angular/core';
import {LogService} from './Service/log.service';
import {HttpService} from './Service/http.service'





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`div{width:30px;height:20px}`],
  providers:[LogService,HttpService],


})
export class AppComponent implements OnInit {
  title = 'app works!';
  delete:Boolean=false;
  test:string='Starting value';
  boundValue:number=300;
  auth:string;
  data1:any []=[];
  private items1:string []=[];
  value1:string='inivalue';
  touchInput(value:string){
    console.log(value)
  }
  constructor(private logServ:LogService,private httpServ:HttpService){}
  onLog(val:string)
  {
    let a=this.logServ.wirteto(val);
    console.log(a)
  }
  onStore(val:string)
  {
    this.logServ.storeData(val)
  }
  onShowdata()
  {
    this.items1=this.logServ.getData().slice(0);
  }

  ngOnInit(){
    this.logServ.pushedData.subscribe(
     data => this.value1=data
    );
  }
  onSubMit(name:string,pwd:string){
      this.httpServ.postMethodLogin(name,pwd)
        .subscribe(
          data=>{
            console.log(data)
           this.data1=data;
            localStorage.setItem('auth',data.authToken)

          },
          error=>console.log(error)
        );
    // this.Http.post()
  }

  onGetInventory(){
    this.httpServ.postMethod()
      .subscribe(
        data=>{
          console.log(data)
        },
        error=>console.log(error)
      )
  }
  onGet(){
      this.httpServ.getMethod()
        .subscribe(
          data=> {
            console.log(data)
          },
          error=>console.log(error)
        );
  }
  onDelete(){
    this.httpServ.deleteMethod()
      .subscribe(
        data=>{
          console.log(data)
        },
        error=>console.log(error)
      )
  }
  // private responseData(resp)
  // {
  //   console.log(resp.json())
  // }
  // private errorHand (resp)
  // {
  //
  // }




}
