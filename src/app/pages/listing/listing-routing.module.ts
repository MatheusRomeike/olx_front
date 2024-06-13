import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  { path: '', component: ListingComponent},
  { path: ':id', component: ListingComponent },
  { path: ':id/:usuarioId', component: SaleComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
