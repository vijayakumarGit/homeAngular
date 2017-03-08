/**
 * Created by Vk on 27/2/2017.
 */
import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import {LogService} from '../Service/log.service'


@Component({
  selector:'app-sample',
  templateUrl:'../sampleComponent/sampleComp.html',
  styles:[`.txtBorder{border: 1px solid red}
           .colorChnage{color: #0e10ff} `],
  providers:[LogService]

})

export class SampleCOmponet implements OnInit {
  @Input() proBinding:string="Welcome Genius";
  @Output('evClick') eventName=new EventEmitter<string>();
  empolyelist:any []=[{'name':'vijay'},{'name':'kiri'},{name:'geeth'},{name:'pappa'}];

  constructor(private lgserv:LogService){}
  ngOnInit(){
    console.log("sampleWorks")
  }
  onLoadFun(){
    return true;
  }
  onClicked(){
    this.eventName.emit('Welcome once again');
  }
  changeValue(value:string){
    console.log(value)
  }
  changeFun()
  {
    this.lgserv.pushData('Welcome once again')
  }
}


