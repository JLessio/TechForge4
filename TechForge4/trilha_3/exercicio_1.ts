class Veiculo {
  mover(): void {
    console.log("O veículo está se movendo");
  }
}

class Carro extends Veiculo {
  mover(): void {
    console.log("O carro está dirigindo");
  }
}

class Bicicleta extends Veiculo {
  mover(): void {
    console.log("A bicicleta está pedalando");
  }
}

// Exemplo de uso:
const carro = new Carro();
const bicicleta = new Bicicleta();

carro.mover();      // Saída: O carro está dirigindo
bicicleta.mover();  // Saída: A bicicleta está pedalando