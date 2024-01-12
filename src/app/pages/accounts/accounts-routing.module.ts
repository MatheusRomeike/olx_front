import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsPublishRootComponent } from './publish/accounts-publish-root/accounts-publish-root.component';

const routes: Routes = [
  { path: 'publish', component: AccountsPublishRootComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
