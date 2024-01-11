import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardRootComponent],
  imports: [DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
