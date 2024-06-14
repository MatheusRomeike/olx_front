import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatRootComponent } from './chat-root/chat-root.component';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [ChatRootComponent, ChatListComponent],
  imports: [CommonModule, ChatRoutingModule, FormsModule, SharedModule],
})
export class ChatModule {}
