interface Documento {
  titulo: string;
  conteudo: string;
}

class Texto implements Documento {
  titulo: string;
  conteudo: string;

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  exibir(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
  }
}

// Exemplo de uso:
const documento = new Texto("Minha Aula", "Hoje aprendi sobre interfaces e classes em TypeScript.");
console.log(documento.exibir());
// Saída: Título: Minha Aula, Conteúdo: Hoje aprendi sobre interfaces e classes em TypeScript.