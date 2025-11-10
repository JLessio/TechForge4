interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  private livros: LivroBiblioteca[];

  constructor() {
    this.livros = [];
  }

  // Método para adicionar livros (opcional, para testar)
  adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter(livro => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}

// Exemplo de uso:
const biblioteca = new BibliotecaGestao();

// Adicionando livros
biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Ficção Científica", disponivel: false });
biblioteca.adicionarLivro({ titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", genero: "Fantasia", disponivel: true });
biblioteca.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Fábula", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Duna", autor: "Frank Herbert", genero: "Ficção Científica", disponivel: true });

// Filtrar por gênero
console.log("Livros de Fantasia:");
console.log(biblioteca.filtrarPorGenero("Fantasia"));

// Buscar por autor
console.log("Livros de George Orwell:");
console.log(biblioteca.buscarPorAutor("George Orwell"));

// Obter livros disponíveis ordenados
console.log("Livros disponíveis ordenados por título:");
console.log(biblioteca.obterLivrosDisponiveisOrdenados());