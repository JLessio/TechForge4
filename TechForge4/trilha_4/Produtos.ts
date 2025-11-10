interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class ItemLoja implements Produto {
  id: number;
  nome: string;
  preco: number;

  constructor(id: number, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }
}

// Exemplo de uso:
const item = new ItemLoja(1, "Camiseta", 29.90);
console.log(item); // { id: 1, nome: 'Camiseta', preco: 29.90 }