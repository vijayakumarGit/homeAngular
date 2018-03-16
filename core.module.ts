



import {NgModule} from "@angular/core";
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdTabsModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSnackBarModule,
  MdMenuModule,
  MdProgressBarModule,
  MdRadioModule,
  MdRippleModule,
  MdSidenavModule,
  MdSliderModule,
  MdSortModule,
  MdTableModule,
  MdTooltipModule
} from "@angular/material";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {Menus} from "../shared/service/menu-items";
import {SortablejsModule} from "angular-sortablejs";
import {Ng2FilterPipeModule} from "ng2-filter-pipe";
import {OwlModule} from "ngx-owl-carousel";
import { NgxDatatableModule } from '@swimlane/ngx-datatable'


const coreModules=[
  CommonModule,
  MdSnackBarModule,
  MdIconModule,
  MdCardModule,
  MdButtonModule,
  MdTabsModule,
  FormsModule,
  HttpModule,
  MdProgressSpinnerModule,
  MdCheckboxModule,
  SortablejsModule,
  Ng2FilterPipeModule,
  MdNativeDateModule,
  MdDatepickerModule,
  OwlModule,
  MdProgressSpinnerModule,
  NgxDatatableModule,
  MdMenuModule,
  MdProgressBarModule,
  MdRadioModule,
  MdRippleModule,
  MdSidenavModule,
  MdSliderModule,
  MdSortModule,
  MdTableModule,
  MdTooltipModule
];

@NgModule({
  imports:coreModules,
  exports:coreModules,
  providers:[Menus]
})

export class CoreModule{}

