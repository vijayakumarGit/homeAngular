import { Component,OnInit } from '@angular/core';
import {LogService} from './Service/log.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`div{width:30px;height:20px}`],
  providers:[LogService],


})
export class AppComponent implements OnInit {
  title = 'app works!';
  delete:Boolean=false;
  test:string='Starting value';
  boundValue:number=300;
  private items1:string []=[];
  value1:string='inivalue';
  touchInput(value:string){
    console.log(value)
  }
  constructor(private logServ:LogService){}
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
    console.log(this.value1)
  }




}
