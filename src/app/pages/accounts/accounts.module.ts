import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsPublishRootComponent } from './publish/accounts-publish-root/accounts-publish-root.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountsPublishRootComponent],
  imports: [AccountsRoutingModule, SharedModule, ReactiveFormsModule],
})
export class AccountsModule {}
