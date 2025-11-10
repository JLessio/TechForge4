class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotal(): number {
    return this.preco * this.quantidade;
  }
}

// Exemplo de uso:
const produto1 = new Produto("Camiseta", 29.90, 100);
console.log(`Valor total em estoque: R$${produto1.calcularValorTotal().toFixed(2)}`); // R$2990.00