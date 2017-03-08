/**
 * Created by Vk on 05/3/2017.
 */
import {Injectable,EventEmitter} from '@angular/core';
  import {loging} from './login.service';
@Injectable()

export class LogService
{
  pushedData=new EventEmitter<string>();
  constructor(private logg:loging){}
   private localArray:string[]=[];
  wirteto(message:string)
  {
    console.log(message)
    return 'vj'+message
  }
  storeData(value:string)
  {
    this.logg.viewfun(value)
    this.localArray.push(value)
  }
  getData(){
    return this.localArray
  }
  pushData(val1:string)
  {
    console.log(val1);
    this.pushedData.emit(val1)
  }
}
