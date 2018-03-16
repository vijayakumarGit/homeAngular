import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routing";
import {CoreModule} from "./module/core.module";
import {BrowserAnimationsModule,} from "@angular/platform-browser/animations";
import {SharedModule} from "./module/shared.module";
import { NonAuthLayoutComponent } from './components/layout/non-auth-layout/non-auth-layout.component';

import {NotificationComponent} from "./components/notification/notification.component";







@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    NotificationComponent,
    NonAuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
