import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaleComponent } from './sale/sale.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";


@NgModule({
  declarations: [ListingComponent, SaleComponent],
  imports: [
    CommonModule,
    ListingRoutingModule, SharedModule, ReactiveFormsModule, SlickCarouselModule, IgxCarouselModule, IgxSliderModule]
})
export class ListingModule { }
