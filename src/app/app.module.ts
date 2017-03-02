import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SampleCOmponet} from './sampleComponent/SampleComponet';
import {SampleTwoComponent} from './sampleComponent/SampleTwoComponent';
import {LifeCycleHook} from './sampleComponent/lfecycleHook';
import {CustomDirective} from './Directive/Custom.derective'

@NgModule({
  declarations: [
    AppComponent,
    SampleCOmponet,
    SampleTwoComponent,
    LifeCycleHook,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
