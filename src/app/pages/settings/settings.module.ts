import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MyListingsComponent } from './components/my-listings/my-listings.component';
import { ProfileRootComponent } from './components/profile-root/profile-root.component';
import { ReportRootComponent } from './components/report-root/report-root.component';
import { SettingsRootComponent } from './settings-root/settings-root.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MyInterestsComponent } from './components/my-interests/my-interests.component';

@NgModule({
  declarations: [
    SettingsRootComponent,
    ProfileRootComponent,
    MyListingsComponent,
    ReportRootComponent,
    MyInterestsComponent,
  ],
  imports: [
    SettingsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
    CommonModule,
  ],
})
export class SettingsModule {}
