class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  marcarComoLido(): void {
    this.lido = true;
    console.log(`O livro "${this.titulo}" foi marcado como lido.`);
  }
}

// Exemplo de uso:
const meuLivro = new Livro("1984", "George Orwell", 328, false);
console.log(meuLivro.lido); // false
meuLivro.marcarComoLido();  // O livro "1984" foi marcado como lido.
console.log(meuLivro.lido); // true