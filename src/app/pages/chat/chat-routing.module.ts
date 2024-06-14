import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatRootComponent } from './chat-root/chat-root.component';

const routes: Routes = [
  { path: ':anuncioId/:usuarioId', component: ChatRootComponent },
  { path: '', component: ChatListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
