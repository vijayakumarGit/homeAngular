/**
 * Created by Vk on 27/2/2017.
 */
import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';



@Component({
  selector:'app-sample',
  templateUrl:'../sampleComponent/sampleComp.html',
  styles:[`.txtBorder{border: 1px solid red}
           .colorChnage{color: #0e10ff} `],

})

export class SampleCOmponet implements OnInit {
  @Input() proBinding:string="Welcome Genius";
  @Output('evClick') eventName=new EventEmitter<string>();
  empolyelist:any []=[{'name':'vijay'},{'name':'kiri'},{name:'geeth'},{name:'pappa'}];
  ngOnInit(){
    console.log("sampleWorks")
  }
  onLoadFun(){
    return true;
  }
  onClicked(){
    this.eventName.emit('Welcome once again')
  }
  changeValue(value:string){
    console.log(value)
  }
}


