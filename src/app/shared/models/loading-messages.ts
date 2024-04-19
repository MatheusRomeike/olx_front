import { ToastrMessages } from './toastr-messages';

export class LoadingMessages {
  Inicio?: ToastrMessages;
  Sucesso?: ToastrMessages;
  Erro?: ToastrMessages;

  constructor(data?: {
    Inicio?: ToastrMessages;
    Sucesso?: ToastrMessages;
    Erro?: ToastrMessages;
  }) {
    this.Inicio = data.Inicio;
    this.Sucesso = data.Sucesso;
    this.Erro = data.Erro;
  }
}
