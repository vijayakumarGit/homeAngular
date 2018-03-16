



import {Routes} from "@angular/router";
import {AuthLayoutComponent} from "./components/layout/auth-layout/auth-layout.component";
import {NonAuthLayoutComponent} from "./components/layout/non-auth-layout/non-auth-layout.component";
import {AuthGurd} from "./shared/service/authGurd.service";

export const AppRoutes:Routes=[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'',
    component:AuthLayoutComponent,
    // canActivate:[AuthGurd],
    children:[
      {
         path:'dashboard',
         loadChildren:'./components/dashboard/dashboard.module#DashboardModule'
       },
      {
        path:'shipment',
        loadChildren:'./components/shipment/shipment.module#ShipmentModule'
      },
      {
        path:'booking',
        loadChildren:'./components/booking/booking.module#BookingModule'
      },
      {
        path:'quotation',
        loadChildren:'./components/quotation/quotation.module#QuotationModule'
      },
      {
        path:'invoice',
        loadChildren:'./components/invoice/invoice.module#InvoiceModule'
      },
      {
        path:'report',
        loadChildren:'./components/report/report.module#ReportModule'
      },
      {
        path:'profile',
        loadChildren:'./components/profile/profile.module#ProfileModule'
      }
    ]
  },
  {
    path:'',
    component:NonAuthLayoutComponent,
    children:[
      {
        path:'login',
        loadChildren:'./components/login/login.module#LoginModule'
      }
    ]
  },
  {"path":'**', redirectTo:'login',}
]



/*{
  path:'finance',
    loadChildren:'./components/finance/finance.module#FinanceModule'
},*/
