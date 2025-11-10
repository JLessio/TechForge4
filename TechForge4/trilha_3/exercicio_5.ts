abstract class Funcionario {
  private nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  public getNome(): string {
    return this.nome;
  }

  public getSalario(): number {
    return this.salario;
  }

  abstract calcularBonus(): number;

  public calcularSalarioComBonus(): number {
    return this.salario + this.calcularBonus();
  }
}

class Gerente extends Funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }

  calcularBonus(): number {
    return this.getSalario() * 0.10; // 10% do salário
  }
}

class Operario extends Funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }

  calcularBonus(): number {
    return this.getSalario() * 0.05; // 5% do salário
  }
}

// Função que calcula e imprime o salário com bônus para um array de funcionários
function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach(funcionario => {
    const salarioBase = funcionario.getSalario();
    const bonus = funcionario.calcularBonus();
    const salarioFinal = funcionario.calcularSalarioComBonus();

    console.log(
      `Funcionário: ${funcionario.getNome()}\n` +
      `Salário Base: R$${salarioBase.toFixed(2)}\n` +
      `Bônus: R$${bonus.toFixed(2)}\n` +
      `Salário com Bônus: R$${salarioFinal.toFixed(2)}\n` +
      "---"
    );
  });
}

// Exemplo de uso:
const funcionarios: Funcionario[] = [
  new Gerente("Ana Silva", 8000),
  new Operario("Carlos Souza", 3000),
  new Gerente("Roberto Alves", 9500),
  new Operario("Fernanda Lima", 2800),
];

calcularSalarioComBonus(funcionarios);