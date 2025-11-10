// Classe abstrata
abstract class Inventory {
  protected itens: Record<string, number>;

  constructor() {
    this.itens = {};
  }

  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

// Subclasse WarehouseInventory
class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    if (quantity > 0) {
      if (this.itens[item] !== undefined) {
        this.itens[item] += quantity;
      } else {
        this.itens[item] = quantity;
      }
      console.log(`Adicionadas ${quantity} unidades de '${item}' ao inventário do armazém. Total: ${this.itens[item]}`);
    } else {
      console.log("A quantidade deve ser positiva.");
    }
  }

  removeItem(item: string): void {
    if (this.itens[item] !== undefined) {
      delete this.itens[item];
      console.log(`Item '${item}' removido do inventário do armazém.`);
    } else {
      console.log(`Item '${item}' não encontrado no inventário do armazém.`);
    }
  }

  getInventory(): Record<string, number> {
    return { ...this.itens }; // Retorna uma cópia para evitar modificações externas
  }
}

// Subclasse StoreInventory
class StoreInventory extends Inventory {
  private limitePorItem: number = 10;

  addItem(item: string, quantity: number): void {
    if (quantity > 0) {
      const quantidadeAtual = this.itens[item] || 0;
      const novaQuantidade = quantidadeAtual + quantity;

      if (novaQuantidade > this.limitePorItem) {
        this.itens[item] = this.limitePorItem;
        console.log(`Limite máximo (${this.limitePorItem}) atingido para '${item}'. Quantidade ajustada.`);
      } else {
        this.itens[item] = novaQuantidade;
        console.log(`Adicionadas ${quantity} unidades de '${item}' ao inventário da loja. Total: ${this.itens[item]}`);
      }
    } else {
      console.log("A quantidade deve ser positiva.");
    }
  }

  removeItem(item: string): void {
    if (this.itens[item] !== undefined) {
      delete this.itens[item];
      console.log(`Item '${item}' removido do inventário da loja.`);
    } else {
      console.log(`Item '${item}' não encontrado no inventário da loja.`);
    }
  }

  getInventory(): Record<string, number> {
    return { ...this.itens }; // Retorna uma cópia para evitar modificações externas
  }
}

// Exemplo de uso:
const inventarioArmazem = new WarehouseInventory();
const inventarioLoja = new StoreInventory();

inventarioArmazem.addItem("Camisetas", 100);
inventarioArmazem.addItem("Calças", 50);
inventarioArmazem.removeItem("Calças");

inventarioLoja.addItem("Canetas", 5);
inventarioLoja.addItem("Canetas", 8); // Deve ajustar para o limite de 10
inventarioLoja.addItem("Borrachas", 15); // Deve ajustar para o limite de 10

console.log("Inventário do Armazém:", inventarioArmazem.getInventory());
console.log("Inventário da Loja:", inventarioLoja.getInventory());