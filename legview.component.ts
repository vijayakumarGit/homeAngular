import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy,
  OnInit, ViewChild
} from '@angular/core';
import * as $ from 'jquery'
import {Subscription} from "rxjs/Subscription";
import {FilterService} from "../../service/filter.service";
import {popoverstate} from "../../service/animation.service";

@Component({
  selector: 'app-legview',
  templateUrl: './legview.component.html',
  styleUrls: ['./legview.component.scss'],
  animations:[popoverstate],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LegviewComponent implements OnInit,OnDestroy {
  @Input() legcomponent;
   loadComponent;
  @ViewChild('modeDialogue') modeDialogue;
   carousel={
    items:5,
    dots:false,
    nav: true,
    autoWidth:true,
   pagination: false,
     autoPlay: false,
     touchDrag: false,
     mouseDrag: false,
    navText: ['<span class="fa fa-angle-left fa-2x"></span>', '<span class="fa fa-angle-right fa-2x"></span>']
   }
  subscribe:Subscription
  warningpop={
    left:0,
    bottom:0,
    msg:'',
    open:true
  };
  popoveranim='close'

  constructor(private def:ChangeDetectorRef,
              private _filterserv:FilterService) { }

  ngOnInit() {
    $('.custooltip').remove();
     this.def.reattach()
    this.loadComponent=this.legcomponent
    this.subscribe=this._filterserv.legwarnObservable$.subscribe(data=>{
        $('.custooltip').remove();
      this.def.markForCheck()
      if(data =='close'){
        if(!this.warningpop.open) {
          this.closepopover()
        }
      }
      else{
        if(this.warningpop.open) {
          $('body').append(this.modeDialogue.nativeElement);
          this.warningpop = {
            left: data.left,
            bottom: data.bottom,
            msg: data.msg,
            open: false
          }
          this.popoveranim = 'open'
          this.def.markForCheck()
        }
      }

    })
  }
  ngOnDestroy(){
    $('.custooltip').remove();
    this.def.detach()

  }

  calCulatePosX(ind){
     if(ind)
     return 200*ind
    else return 25;
  }
  closepopover(){
    this.warningpop={
      left:0,
      bottom:0,
      msg:'',
      open:true
    };
    this.popoveranim='close'
    $('.custooltip').remove();
  }

}
