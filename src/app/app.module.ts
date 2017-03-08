import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {SampleCOmponet} from './sampleComponent/SampleComponet';
import {SampleTwoComponent} from './sampleComponent/SampleTwoComponent';
import {LifeCycleHook} from './sampleComponent/lfecycleHook';
import {CustomDirective} from './Directive/Custom.derective';
import {StructralDirective} from './Directive/strucralDirective';
import {loging} from './Service/login.service';


@NgModule({
  declarations: [
    AppComponent,
    SampleCOmponet,
    SampleTwoComponent,
    LifeCycleHook,
    CustomDirective,
    StructralDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [loging],
  bootstrap: [AppComponent]
})
export class AppModule { }
