
/**
 * Created by Vk on 05/3/2017.
 */

import {Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector:'[structDirective]'
})

export class StructralDirective{

    @Input() set structDirective(condtion:boolean)
    {
      if(condtion)
      {
        this.vcR.createEmbeddedView(this.temRef)
      }
      else
      {
        this.vcR.clear();
      }
    }
    constructor(private temRef:TemplateRef<any>,private vcR:ViewContainerRef){}
}
