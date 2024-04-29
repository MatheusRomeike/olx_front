export class ToastrMessages {
  Titulo: string;
  Conteudo?: string;

  constructor(data: { Titulo: string; Conteudo?: string }) {
    this.Titulo = data.Titulo;
    this.Conteudo = data.Conteudo;
  }
}
