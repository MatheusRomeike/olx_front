import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRootComponent } from './components/profile-root/profile-root.component';
import { ReportRootComponent } from './components/report-root/report-root.component';
import { SettingsRootComponent } from './settings-root/settings-root.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [
    SettingsRootComponent,
    ProfileRootComponent,
    ReportRootComponent,
  ],
  imports: [
    SettingsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class SettingsModule {}
