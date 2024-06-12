import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatRootComponent } from './chat-root/chat-root.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChatRootComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
  ]
})
export class ChatModule { }
