
/**
 * Created by Vk on 08/3/2017.
 */
import {Routes, RouterModule} from '@angular/router';
// import {AppComponent} from './app.component';
import {UserAdd} from './user/user-add';
import {UserDetail} from './user/user-detail';
import {UserList} from './user/user-list';
// import {ModuleWithProviders} from "@angular/core";


const APP_ROUTE:Routes=[
  {path:'',component:UserAdd},
  {path:'user/list',component:UserList},
  {path:'user/detail/:id',component:UserDetail}
];

export const Routing=RouterModule.forRoot(APP_ROUTE)
