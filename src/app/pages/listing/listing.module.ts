import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaleComponent } from './sale/sale.component';
import { AdListComponent } from './list/ad-list.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
import { NgxMaskDirective, NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [ListingComponent, SaleComponent, AdListComponent],
  imports: [
    CommonModule,
    ListingRoutingModule, SharedModule, ReactiveFormsModule, SlickCarouselModule, IgxCarouselModule, IgxSliderModule, NgxMaskModule.forRoot(), FormsModule]
})
export class ListingModule { }
