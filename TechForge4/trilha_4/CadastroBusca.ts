interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  private produtos: ProdutoLoja[];

  constructor() {
    this.produtos = [];
  }

  // Método para adicionar produtos (opcional, para testar a busca)
  adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(produto => produto.codigo === codigo);
  }
}

// Exemplo de uso:
const minhaLoja = new Loja();

// Adicionando produtos
minhaLoja.adicionarProduto({ codigo: 1, nome: "Camiseta" });
minhaLoja.adicionarProduto({ codigo: 2, nome: "Calça Jeans" });
minhaLoja.adicionarProduto({ codigo: 3, nome: "Tênis" });

// Buscando produtos
const produto1 = minhaLoja.buscarProdutoPorCodigo(2);
console.log(produto1); // { codigo: 2, nome: 'Calça Jeans' }

const produtoNaoExistente = minhaLoja.buscarProdutoPorCodigo(99);
console.log(produtoNaoExistente); // undefined