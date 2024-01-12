import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsPublishRootComponent } from './publish/accounts-publish-root/accounts-publish-root.component';

@NgModule({
  declarations: [AccountsPublishRootComponent],
  imports: [AccountsRoutingModule, SharedModule],
})
export class AccountsModule {}
