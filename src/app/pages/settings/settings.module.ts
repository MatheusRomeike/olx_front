import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRootComponent } from './components/profile-root/profile-root.component';
import { SettingsRootComponent } from './settings-root/settings-root.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsRootComponent, ProfileRootComponent],
  imports: [SettingsRoutingModule, SharedModule, ReactiveFormsModule],
})
export class SettingsModule {}
