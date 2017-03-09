/**
 * Created by Vk on 27/2/2017.
 */
import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';
import {LogService} from '../Service/log.service'
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector:'app-sample',
  templateUrl:'../sampleComponent/sampleComp.html',
  styles:[`.txtBorder{border: 1px solid red}
           .colorChnage{color: #0e10ff} `],
  providers:[LogService]

})

export class SampleCOmponet implements OnInit {
  @Input() proBinding:string="Welcome Genius";
  vals:string;
  @Output('evClick') eventName=new EventEmitter<string>();
  empolyelist:any []=[{'name':'vijay'},{'name':'kiri'},{name:'geeth'},{name:'pappa'}];

  constructor(private lgserv:LogService,private router:Router,private actRout:ActivatedRoute){
    actRout.params.subscribe(
      (params:any)=> this.vals =params['id']
    );


  }
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

  onNavicate(val:string){
      this.router.navigate(['user/list'],{queryParams:{'container':'10'}})
    // let value=document.getElementById('sampleCom1').value;
    // console.log(value)
    // this.router.navigate(['user/detail/'+val])
  }
}


