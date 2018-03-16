import {Routes} from "@angular/router";
import {ShipmentComponent} from "./list/shipment.component";
import {ShipmentLayoutComponent} from "./shipment-layout.component";
import {ShipmentTableComponent} from "./table/shipment-table.component";
import {AuthGurd} from "../../shared/service/authGurd.service";
import {ShipmentDetailComponent} from "./detail/detail.component";


export const ShipmentRoutes:Routes=[
  {path:'',component:ShipmentLayoutComponent,
  data:[{name:'Shipments',routes:{'list':'shipment/list','table':'shipment/datatable'}}],
    // canActivate:[AuthGurd],
    canDeactivate:[AuthGurd],
  children:[
    {
      path:'list',
      component:ShipmentComponent,
      canActivate:[AuthGurd],
      canDeactivate:[AuthGurd]
    },
    {
      path:'datatable',
      component:ShipmentTableComponent,
      canActivate:[AuthGurd],
      canDeactivate:[AuthGurd]
    }
  ]},
  {
    path:'detail/:id',
    component:ShipmentDetailComponent,
    canActivate:[AuthGurd],
    canDeactivate:[AuthGurd]
  }
]
