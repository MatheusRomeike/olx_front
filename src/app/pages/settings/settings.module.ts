import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileRootComponent } from './components/profile-root/profile-root.component';
import { SettingsRootComponent } from './settings-root/settings-root.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MyListingsComponent } from './components/my-listings/my-listings.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SettingsRootComponent, ProfileRootComponent, MyListingsComponent],
  imports: [SettingsRoutingModule, SharedModule, ReactiveFormsModule, CommonModule ],
})
export class SettingsModule {}
