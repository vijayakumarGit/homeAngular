/**
 * Created by Vk on 27/2/2017.
 */
import {Component,Input} from "@angular/core";

@Component({
  selector:"app-test",
  template:"<h1>Hi Liad</h1>" +
  "<input type='text' #sample6  [(ngModel)]='person.name'>" +
  "{{sample0}}" +
  "{{sample6.value}}"
})

export class SampleTwoComponent{
  person={'name':"vijay"};

  @Input('sample11') sample0:string="VKS";
}
