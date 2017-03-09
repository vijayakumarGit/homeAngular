/**
 * Created by Vk on 08/3/2017.
 */
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector:'user-detail',
  template:`<h1>user detail</h1>{{routeId}}


`})

export class UserDetail{
  routeId:string;
  queryId:string;

  constructor(private actRt:ActivatedRoute,private rt:Router)
  {
    actRt.params.subscribe(
      ((params:any)=>this.routeId=params['id'])
    );
    // rt.routerState.subscribe(
    //   ((query:any)=>this.queryId=query )
    // );

  }

}
