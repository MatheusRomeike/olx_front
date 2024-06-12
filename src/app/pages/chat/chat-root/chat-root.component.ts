// src/pages/chat/chat-root/chat-root.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat-root',
  templateUrl: './chat-root.component.html',
  styleUrls: ['./chat-root.component.scss']
})
export class ChatRootComponent implements OnInit {
  messages: any[] = [
    {
      author: 'Cliente',
      text: 'Olá, tenho uma dúvida sobre o produto.',
      createdAt: new Date('2023-06-10T10:15:00'),
      type: 'received' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Usuário',
      text: 'Claro, como posso ajudar?',
      createdAt: new Date('2023-06-10T10:16:00'),
      type: 'sent' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Cliente',
      text: 'Gostaria de saber sobre a garantia.',
      createdAt: new Date('2023-06-10T10:17:00'),
      type: 'received' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Usuário',
      text: 'A garantia é de 1 ano para todos os produtos.',
      createdAt: new Date('2023-06-10T10:18:00'),
      type: 'sent' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Cliente',
      text: 'Olá, tenho uma dúvida sobre o produto.',
      createdAt: new Date('2023-06-10T10:15:00'),
      type: 'received' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Usuário',
      text: 'Claro, como posso ajudar?',
      createdAt: new Date('2023-06-10T10:16:00'),
      type: 'sent' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Cliente',
      text: 'Gostaria de saber sobre a garantia.',
      createdAt: new Date('2023-06-10T10:17:00'),
      type: 'received' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Usuário',
      text: 'A garantia é de 1 ano para todos os produtos.',
      createdAt: new Date('2023-06-10T10:18:00'),
      type: 'sent' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Cliente',
      text: 'Olá, tenho uma dúvida sobre o produto.',
      createdAt: new Date('2023-06-10T10:15:00'),
      type: 'received' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Usuário',
      text: 'Claro, como posso ajudar?',
      createdAt: new Date('2023-06-10T10:16:00'),
      type: 'sent' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Cliente',
      text: 'Gostaria de saber sobre a garantia.',
      createdAt: new Date('2023-06-10T10:17:00'),
      type: 'received' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Usuário',
      text: 'A garantia é de 1 ano para todos os produtos.',
      createdAt: new Date('2023-06-10T10:18:00'),
      type: 'sent' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Cliente',
      text: 'Olá, tenho uma dúvida sobre o produto.',
      createdAt: new Date('2023-06-10T10:15:00'),
      type: 'received' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Usuário',
      text: 'Claro, como posso ajudar?',
      createdAt: new Date('2023-06-10T10:16:00'),
      type: 'sent' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Cliente',
      text: 'Gostaria de saber sobre a garantia. Gostaria de saber sobre a garantia. Gostaria de saber sobre a garantia. Gostaria de saber sobre a garantia. Gostaria de saber sobre a garantia. Gostaria de saber sobre a garantia. Gostaria de saber sobre a garantia. Gostaria de saber sobre a garantia. ',
      createdAt: new Date('2023-06-10T10:17:00'),
      type: 'received' // Adicionado tipo para diferenciar mensagens
    },
    {
      author: 'Usuário',
      text: 'A garantia é de 1 ano para todos os produtos.',
      createdAt: new Date('2023-06-10T10:18:00'),
      type: 'sent' // Adicionado tipo para diferenciar mensagens
    },
  ];

  constructor(private chatService: ChatService) { }

  newMessageText: string = '';

  // constructor() { }

  ngOnInit(): void { }

  sendMessage(): void {
    if (this.newMessageText.trim() !== '') {
      this.messages.push({
        author: 'Usuário',
        text: this.newMessageText,
        createdAt: new Date(),
        type: 'sent'
      });
      this.newMessageText = '';
    }

  // ngOnInit(): void {
    // this.chatService.getMessages().subscribe((data: any[]) => {
    //   this.messages = data;
    // });
  }
}
