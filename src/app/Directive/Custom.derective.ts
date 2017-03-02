
/**
 * Created by Vk on 02/3/2017.
 */

import {Directive,ElementRef,Renderer,HostListener,} from '@angular/core';
@Directive({
  selector:'[customDirective]'
})

export class CustomDirective{
constructor(private elmR:ElementRef,private erC:Renderer){
  // console.log(this.elmR.nativeElement)
  // this.elmR.nativeElement.style.backgroundColor='green'
  this.erC.setElementStyle(this.elmR.nativeElement,'background-color','red')

}
}
