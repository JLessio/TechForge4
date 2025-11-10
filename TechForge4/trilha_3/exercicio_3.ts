abstract class Pagamento {
  abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
  numeroCartao: string;

  constructor(numeroCartao: string) {
    super();
    this.numeroCartao = numeroCartao;
  }

  private validarNumeroCartao(): boolean {
    // Exemplo simples: verifica se o número tem 16 dígitos e é numérico
    const regex = /^\d{16}$/;
    return regex.test(this.numeroCartao);
  }

  processar(): void {
    if (this.validarNumeroCartao()) {
      console.log(`Pagamento com cartão ${this.numeroCartao.slice(0, 4)}****${this.numeroCartao.slice(-4)} processado com sucesso.`);
    } else {
      console.log("Número de cartão inválido.");
    }
  }
}

class PagamentoBoleto extends Pagamento {
  codigoBoleto: string;

  constructor() {
    super();
    this.codigoBoleto = this.gerarCodigoBoleto();
  }

  private gerarCodigoBoleto(): string {
    // Gera um código de boleto fictício de 48 dígitos
    const codigo = Array.from({ length: 48 }, () => Math.floor(Math.random() * 10)).join('');
    return codigo;
  }

  processar(): void {
    console.log(`Boleto gerado com sucesso. Código: ${this.codigoBoleto}`);
  }
}

// Função que aceita diferentes tipos de pagamento e os processa
function processarPagamentos(pagamentos: Pagamento[]): void {
  pagamentos.forEach(pagamento => {
    pagamento.processar();
  });
}

// Exemplo de uso:
const pagamentos: Pagamento[] = [
  new PagamentoCartao("1234567890123456"),
  new PagamentoCartao("1234"), // Inválido
  new PagamentoBoleto(),
];

processarPagamentos(pagamentos);