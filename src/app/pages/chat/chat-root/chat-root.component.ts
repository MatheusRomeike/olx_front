// src/pages/chat/chat-root/chat-root.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../listing/services/listing.service';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-chat-root',
  templateUrl: './chat-root.component.html',
  styleUrls: ['./chat-root.component.scss'],
})
export class ChatRootComponent implements OnInit {
  @ViewChild('messagesContainer', { static: false })
  messagesContainer: ElementRef;

  messages: any[] = [];
  usuarioId;
  anuncioId;
  tituloAnuncio = 'Titulo do anuncio';

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private router: Router
  ) {}

  newMessageText: string = '';

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.usuarioId = params['usuarioId'];
      this.anuncioId = params['anuncioId'];
    });
    this.messages = await this.chatService.List({
      anuncioId: this.anuncioId,
      usuarioId: this.usuarioId,
    });
    this.tituloAnuncio = await this.listingService.getTituloAnuncio(
      this.anuncioId
    );
    this.scrollToBottom();
  }

  sendMessage(): void {
    if (this.newMessageText.trim() !== '') {
      const message = {
        texto: this.newMessageText,
      };
      this.messages.push({
        ...message,
        autor: localStorage.getItem('nomeUsuario'),
        dataCriacao: new Date(),
        tipo: 'enviado',
      });
      this.chatService.Create({
        ...message,
        usuarioId: this.usuarioId,
        anuncioId: this.anuncioId,
      });
      this.newMessageText = '';
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    try {
      setTimeout(() => {
        this.messagesContainer.nativeElement.scrollTop =
          this.messagesContainer.nativeElement.scrollHeight;
      }, 50);
    } catch (err) {
      console.error('Scroll to bottom failed:', err);
    }
  }

  voltar() {
    this.router.navigate(['/chat']);
  }
}
