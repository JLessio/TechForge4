interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  private livros: Livro[];

  constructor() {
    this.livros = [];
  }

  // Método para adicionar livros (opcional, para testar)
  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livro => livro.disponivel === true);
  }
}

// Exemplo de uso:
const biblioteca = new Biblioteca();

// Adicionando livros
biblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
biblioteca.adicionarLivro({ titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", disponivel: true });
biblioteca.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", disponivel: true });

// Buscando livros disponíveis
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log("Livros disponíveis:");
console.log(livrosDisponiveis);