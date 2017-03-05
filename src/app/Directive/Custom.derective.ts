
/**
 * Created by Vk on 02/3/2017.
 */

import {Directive,ElementRef,Renderer,HostListener,Input,HostBinding,TemplateRef,ViewContainerRef} from '@angular/core';
@Directive({
  selector:'[customDirective]'
})

export class CustomDirective{
  @Input() backgroundColor:string='green';
  @Input() defultColor:string;
  @Input('customDirective') set customDirec(condition:boolean){
    if(!condition)
      this.vcRef.createEmbeddedView(this.temRef)
    else
      this.vcRef.clear();
  }

  @HostListener('mouseenter') mouseover(){
   this.bcColor(this.backgroundColor)
    // this.backgroundColor='orange'
  }
  @HostListener('mouseleave') mouseleave(){
    this.bcColor(this.defultColor)
    // this.backgroundColor='pink'
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor
  }
constructor(private elmR:ElementRef,private erC:Renderer,private temRef:TemplateRef<any>,private vcRef:ViewContainerRef){
  // console.log(this.elmR.nativeElement)
  // this.elmR.nativeElement.style.backgroundColor=this.backgroundColor
  // this.erC.setElementStyle(this.elmR.nativeElement,'background-color','red')
}
private bcColor(color:string){
  this.elmR.nativeElement.style.backgroundColor=color
}
}
