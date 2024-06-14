import { Component } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
})
export class ChatListComponent {
  conversas = [];

  constructor(private chatService: ChatService) {}

  async ngOnInit(): Promise<void> {
    this.conversas = await this.chatService.GetConversas();
  }
}
