import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from "@angular/router";
import {ShipmentRoutes} from "./shipement.routing";
import {ShipmentComponent} from "./list/shipment.component";
import {SharedModule} from "../../module/shared.module";
import {CoreModule} from "../../module/core.module";
import { ShipmentLayoutComponent } from './shipment-layout.component';
import {ShipmentTableComponent} from "./table/shipment-table.component";
import {ShipmentDetailComponent} from "./detail/detail.component";
import {ShipmentService} from "./shipment.service";
import {Json2csv} from "../report/json2csv";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(ShipmentRoutes)
  ],
  declarations: [
    ShipmentComponent,
    ShipmentLayoutComponent,
    ShipmentTableComponent,
    ShipmentDetailComponent
  ],
  providers:[
    ShipmentService,
    Json2csv
  ]
})
export class ShipmentModule { }
