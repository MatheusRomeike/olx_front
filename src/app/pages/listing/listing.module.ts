import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaleComponent } from './sale/sale.component';
import { AdListComponent } from './list/ad-list.component';


@NgModule({
  declarations: [ListingComponent, SaleComponent, AdListComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    SharedModule,
    ReactiveFormsModule]
})
export class ListingModule { }
