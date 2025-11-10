abstract class Animal {
  private energia: number;

  constructor(energiaInicial: number = 100) {
    this.energia = energiaInicial;
  }

  protected getEnergia(): number {
    return this.energia;
  }

  protected setEnergia(valor: number): void {
    this.energia = valor;
  }

  abstract comer(): void;

  statusEnergia(): void {
    console.log(`${this.constructor.name} tem ${this.energia} de energia.`);
  }
}

class Leao extends Animal {
  constructor(energiaInicial: number = 100) {
    super(energiaInicial);
  }

  comer(): void {
    console.log("Leão começa a caçar...");
    const energiaAtual = this.getEnergia();
    const gastoCaça = 30;
    let novaEnergia = energiaAtual - gastoCaça;

    if (novaEnergia < 0) {
      novaEnergia = 0;
    }

    this.setEnergia(novaEnergia);
    console.log(`Leão gastou energia caçando. Energia após caça: ${novaEnergia}`);

    // Recupera energia ao comer
    const ganhoComida = 50;
    const energiaFinal = Math.min(100, this.getEnergia() + ganhoComida);
    this.setEnergia(energiaFinal);
    console.log(`Leão comeu e recuperou energia. Energia final: ${energiaFinal}`);
  }
}

class Passaro extends Animal {
  constructor(energiaInicial: number = 50) {
    super(energiaInicial);
  }

  comer(): void {
    console.log("Pássaro encontra comida e se alimenta...");
    const energiaGanha = 20;
    const energiaAtual = this.getEnergia();
    const energiaFinal = Math.min(100, energiaAtual + energiaGanha);
    this.setEnergia(energiaFinal);
    console.log(`Pássaro comeu e recuperou energia. Energia final: ${energiaFinal}`);
  }
}

// Função que demonstra o uso de polimorfismo
function interagirComAnimais(animais: Animal[]): void {
  animais.forEach(animal => {
    animal.statusEnergia();
    animal.comer();
    animal.statusEnergia();
    console.log("---");
  });
}

// Exemplo de uso:
const animais: Animal[] = [
  new Leao(80),
  new Passaro(30),
];

interagirComAnimais(animais);