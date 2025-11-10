// Classe abstrata
abstract class FavoriteManager {
  protected favorites: string[];

  constructor() {
    this.favorites = [];
  }

  abstract addFavorite(item: string): void;
  abstract getFavorites(): string[];
}

// Subclasse MoviesFavoriteManager
class MoviesFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    // Verifica se o item já está na lista para evitar duplicatas
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
      console.log(`Filme '${item}' adicionado aos favoritos.`);
    } else {
      console.log(`Filme '${item}' já está na lista de favoritos.`);
    }
  }

  getFavorites(): string[] {
    // Retorna a lista ordenada alfabeticamente
    return [...this.favorites].sort();
  }
}

// Subclasse BooksFavoriteManager
class BooksFavoriteManager extends FavoriteManager {
  addFavorite(item: string): void {
    // Verifica se o item já está na lista para evitar duplicatas
    if (!this.favorites.includes(item)) {
      this.favorites.unshift(item); // Adiciona no início da lista
      console.log(`Livro '${item}' adicionado ao início dos favoritos.`);
    } else {
      console.log(`Livro '${item}' já está na lista de favoritos.`);
    }
  }

  getFavorites(): string[] {
    return [...this.favorites]; // Retorna uma cópia da lista original
  }
}

// Exemplo de uso:
const filmesFavoritos = new MoviesFavoriteManager();
const livrosFavoritos = new BooksFavoriteManager();

filmesFavoritos.addFavorite("Inception");
filmesFavoritos.addFavorite("The Matrix");
filmesFavoritos.addFavorite("Inception"); // Duplicado
filmesFavoritos.addFavorite("Interstellar");

livrosFavoritos.addFavorite("1984");
livrosFavoritos.addFavorite("Duna");
livrosFavoritos.addFavorite("1984"); // Duplicado
livrosFavoritos.addFavorite("O Senhor dos Anéis");

console.log("Filmes favoritos (ordenados):", filmesFavoritos.getFavorites());
console.log("Livros favoritos (ordem de adição, com novos no início):", livrosFavoritos.getFavorites());