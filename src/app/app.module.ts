import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
// import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {SampleCOmponet} from './sampleComponent/SampleComponet';
import {SampleTwoComponent} from './sampleComponent/SampleTwoComponent';
import {LifeCycleHook} from './sampleComponent/lfecycleHook';
import {CustomDirective} from './Directive/Custom.derective';
import {StructralDirective} from './Directive/strucralDirective';
import {loging} from './Service/login.service';
// import {Routing} from "./app-routing";

import {UserAdd} from './user/user-add';
import {UserDetail} from './user/user-detail';
import {UserList} from './user/user-list';
import {AccountLst} from './account/account-list';
import {AccountDetail} from './account/account-detail';

import {Routes, RouterModule} from "@angular/router";

const route:Routes=[
  {path:'',component:UserAdd},
  {path:'user/detail/:id',component:UserDetail},
  {path:'user/list',component:UserList},
  {path:'account/list',component:AccountLst},
  {path:'account/detail/:id',component:AccountDetail}
  ];

@NgModule({
  declarations: [
    AppComponent,
    SampleCOmponet,
    SampleTwoComponent,
    LifeCycleHook,
    CustomDirective,
    StructralDirective,
    UserAdd,
    UserDetail,
    UserList,
    AccountLst,
    AccountDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(route)
  ],
  providers: [loging],
  bootstrap: [AppComponent]
})
export class AppModule { }
