import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRootComponent } from './chat-root/chat-root.component';

const routes: Routes = [
  { path: ':anuncioId/:usuarioId', component: ChatRootComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
