export class LoadingMessages {
  Sucesso?: string;
  Erro?: string;

  constructor(data?: { Sucesso?: string; Erro?: string }) {
    if (data) {
      this.Sucesso = data.Sucesso;
      this.Erro = data.Erro;
    }
  }
}
