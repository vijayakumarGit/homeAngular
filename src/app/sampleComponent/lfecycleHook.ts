/**
 * Created by Vk on 01/3/2017.
 */
import {Component,OnInit,OnChanges,AfterViewInit,AfterContentInit,AfterContentChecked,
OnDestroy,DoCheck,AfterViewChecked,Input,ViewChild,ContentChild} from '@angular/core'

@Component({
  selector:'app-life',
  template:'<h1>lifeCycle Works</h1>' +
  '<ng-content></ng-content>' +
  '<hr>' +
  '<p #pragraphView>{{bindable}}</p> ' +
  '<p>{{pragraphView.textContent}}</p>'
})

export class LifeCycleHook implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,
AfterContentChecked{
  @ViewChild('pragraphView') pragraphView:HTMLElement;
  @ContentChild('boundContent') boundContent:HTMLElement;
  @Input() bindable:number=500;
  ngOnInit(){
    this.work('ngOnInit')
  }
  ngOnChanges(){
    this.work('ngOnChanges')
  }
  ngDoCheck(){
    this.work('ngDoCheck')
  }
  ngAfterViewInit(){
    this.work('ngAfterViewInit')
    // console.log(this.pragraphView)

  }
  ngAfterViewChecked(){
    this.work('ngAfterViewChecked')
  }
  ngAfterContentInit(){
    this.work('ngAfterContentInit');
    // console.log(this.boundContent.innerHTML)
  }
  ngAfterContentChecked(){
    this.work('ngAfterContentChecked')

  }
  ngOnDestroy(){
    this.work('ngOnDestroy')
  }
  private work(hook:string){
    console.log(hook)
  }
}
