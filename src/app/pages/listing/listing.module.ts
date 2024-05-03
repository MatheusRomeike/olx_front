import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    ListingRoutingModule, SharedModule, ReactiveFormsModule]
})
export class ListingModule { }
