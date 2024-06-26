import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsRootComponent } from './settings-root/settings-root.component';

const routes: Routes = [{ path: '', component: SettingsRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
