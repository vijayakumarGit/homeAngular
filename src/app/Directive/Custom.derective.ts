
/**
 * Created by Vk on 02/3/2017.
 */

import {Directive,ElementRef,Renderer,HostListener,Input,HostBinding} from '@angular/core';
@Directive({
  selector:'[customDirective]'
})

export class CustomDirective{
  @Input() backgroundColor:string='green';

  @HostListener('mouseenter') mouseover(){
   this.bcColor('orange')
    // this.backgroundColor='orange'
  }
  @HostListener('mouseleave') mouseleave(){
    this.bcColor('pink')
    // this.backgroundColor='pink'
  }

  // @HostBinding('style.backgroundColor') get setColor(){
  //   return this.backgroundColor
  // }
constructor(private elmR:ElementRef,private erC:Renderer){
  // console.log(this.elmR.nativeElement)
  // this.elmR.nativeElement.style.backgroundColor=this.backgroundColor
  // this.erC.setElementStyle(this.elmR.nativeElement,'background-color','red')
}
private bcColor(color:string){
  this.elmR.nativeElement.style.backgroundColor=color
}
}
