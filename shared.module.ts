import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubmenuPopupComponent} from "../shared/components/submenu-popup/submenu-popup.component";
import {KeysPipePipe} from "../shared/pipe/keys-pipe.pipe";
import {ProgressComponent} from "../shared/components/progress/progress.component";
import {BookingBarComponent} from "../shared/components/booking-bar/booking-bar.component";
import {ShipmentBarComponent} from "../shared/components/shipment-bar/shipment-bar.component";
import {NgzDataTableComponent} from "../shared/components/tableview/tableview.component";
import {SortOrderPipe} from "../shared/pipe/sort-order.pipe";
import {CoreModule} from "./core.module";
import {ToastService} from "../shared/service/toast.service";
import {SearchBoxComponent} from "../shared/components/search-box/search-box.component";
import {DropdownBoxComponent} from "../shared/components/dropdown-box/dropdown-box.component";
import {AuthGurd} from "../shared/service/authGurd.service";
import {DateRangePickerComponent} from "../shared/components/date-picker/date-range-picker.component";
import {CustomizeFilterComponent} from "../shared/components/custome-filter-popup/customize-filter.component";
import {CustomizeColumnComponent} from "../shared/components/customize-column/customize.column.component";
import {LoopNumbersPipe} from "../shared/pipe/loop-numbers.pipe";
import {FilterHeaderComponent} from "../shared/components/filter-header/filter-header.component";
import {FilterService} from "../shared/service/filter.service";
import {FilterLabelComponent} from "../shared/components/filter-label/filter-label.component";
import {MilestoneComponent} from "../shared/components/milestone/milestone.component";
import {ModelPopupComponent} from "../shared/components/model-popup/model-popup.component";
import {ApiService} from "../shared/service/api.service";
import {ApiurlService} from "../shared/service/apiurl.service";
import {BookBarComponent} from "../shared/components/detail-component/book-bar/book-bar.component";
import {ContactDetailComponent} from "../shared/components/detail-component/contact-detail/contact-detail.component";
import {GoodsDetailComponent} from "../shared/components/detail-component/goods-detail/goods-detail.component";
import {OtherDetailComponent} from "../shared/components/detail-component/other-detail/other-detail.component";
import {VoyageDetailComponent} from "../shared/components/detail-component/voyage-detail/voyage-detail.component";
import {ListViewComponent} from "../shared/components/list-view/list-view.component";
import {ScrollTrackerDirective} from "../shared/directive/scroll-tracker.directive";
import {
  CircleComponent, CurvedLineComponent, DashedLineComponent,
  LineComponent, WaveLineComponent
} from "../shared/components/legview/dynamic-component/all-component/all-component.component";
import {LegviewComponent} from "../shared/components/legview/legview.component";
import {DynamicLoadComponent} from "../shared/components/legview/dynamic-component/dynamic-component.component";
import {BodyLoaderComponent} from "../shared/components/loader/body-loader/body-loader.component";
import {ShowMore} from "../shared/pipe/show-more";
import {OtherService} from "../shared/service/other.service";
import {NorecordComponent} from "../shared/components/norecord/norecord.component";
import {
  SanitizeHtmlPipe, SanitizerStylePipe, SanitizeTrustUrlPipe,
  SanitizeUrlPipe
} from "../shared/pipe/sanitizer.safe.pipe";
import {CustomFilterPipe} from "../shared/pipe/custom-filter.pipe";
import {SortByPipe} from "../shared/pipe/sort-by.pipe";
import {CustomSearchPipe} from "../shared/pipe/custom-search.pipe";
import {PdfViewerComponent} from "ng2-pdf-viewer";
import {CustomBookPipe} from "../shared/pipe/custom-book.pipe";
import {CommonService} from "../shared/service/common.service";
import {MakePositive} from "../shared/pipe/other.pipe";
import {CustomDateRangePipe} from "../shared/pipe/custom-date-range.pipe";
import {VoyageLegComponent} from "../shared/components/voyage-leg/voyage-leg.component";
import {SpecialNoteComponent} from "../shared/components/detail-component/special-note/special-note.component";
import {GoogleAnalyticsEventsService} from "../shared/service/analytics.service";
import {SessionSecureService} from "../shared/service/session.secure.service";
import {ShowMorev2} from "../shared/pipe/show-morev2";


@NgModule({
  imports: [
    CommonModule,
    CoreModule
     ],
  declarations: [

    PdfViewerComponent,
    SubmenuPopupComponent,
    KeysPipePipe,
    LoopNumbersPipe,
    ProgressComponent,
    SortOrderPipe,
    FilterHeaderComponent,
    ShipmentBarComponent,
    BookingBarComponent,
    NgzDataTableComponent,
    SearchBoxComponent,
    DropdownBoxComponent,
    CustomizeFilterComponent,
    DateRangePickerComponent,
    CustomizeColumnComponent,
    ModelPopupComponent,
    MilestoneComponent,
    FilterLabelComponent,
    ListViewComponent,
    VoyageLegComponent,
    SpecialNoteComponent,

    DynamicLoadComponent,
    CircleComponent,
    LineComponent,
    DashedLineComponent,
    CurvedLineComponent,
    WaveLineComponent,
    LegviewComponent,
    NorecordComponent,

    BodyLoaderComponent,
    BookBarComponent,
    ContactDetailComponent,
    GoodsDetailComponent,
    OtherDetailComponent,
    VoyageDetailComponent,

    SanitizerStylePipe,
    SanitizeHtmlPipe,
    SanitizeUrlPipe,
    SortByPipe,
    CustomFilterPipe,
    ScrollTrackerDirective,
    ShowMore,
    CustomSearchPipe,
    SanitizeTrustUrlPipe,
    CustomBookPipe,
    MakePositive,
    CustomDateRangePipe,
    ShowMorev2
  ],
  exports:[
    PdfViewerComponent,
    SubmenuPopupComponent,
    KeysPipePipe,
    SortOrderPipe,
    LoopNumbersPipe,
    FilterHeaderComponent,
    ProgressComponent,
    ShipmentBarComponent,
    BookingBarComponent,
    NgzDataTableComponent,
    SearchBoxComponent,
    DropdownBoxComponent,
    CustomizeFilterComponent,
    DateRangePickerComponent,
    CustomizeColumnComponent,
    MilestoneComponent,
    FilterLabelComponent,
    ModelPopupComponent,
    ListViewComponent,
    VoyageLegComponent,
    SpecialNoteComponent,

    DynamicLoadComponent,
    CircleComponent,
    LineComponent,
    DashedLineComponent,
    CurvedLineComponent,
    WaveLineComponent,
    BodyLoaderComponent,

    LegviewComponent,
    NorecordComponent,


//
    BookBarComponent,
    ContactDetailComponent,
    GoodsDetailComponent,
    OtherDetailComponent,
    VoyageDetailComponent,



    ScrollTrackerDirective,
    ShowMore,
    SortByPipe,
    SanitizerStylePipe,
    SanitizeHtmlPipe,
    SanitizeUrlPipe,
    CustomFilterPipe,
    CustomSearchPipe,
    SanitizeTrustUrlPipe,
    CustomBookPipe,
    MakePositive,
    CustomDateRangePipe,
    ShowMorev2

  ],
  entryComponents:[
    CircleComponent,
    LineComponent,
    DashedLineComponent,
    CurvedLineComponent,
    WaveLineComponent
  ],
  providers:[ToastService,
    GoogleAnalyticsEventsService,
    ApiService
    ,ApiurlService,
    AuthGurd,
    FilterService,
    OtherService,
    CommonService,
    SessionSecureService]
})
export class SharedModule { }
