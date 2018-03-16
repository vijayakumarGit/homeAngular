
import {Routes} from "@angular/router";
import {QuotationComponent} from "./quotation.component";
import {AuthGurd} from "../../shared/service/authGurd.service";

export const QuotationRoutes:Routes=[
  {
    path:'',
    component:QuotationComponent,
    canActivate:[AuthGurd],
    outlet:'fullscreen'
  }
]
