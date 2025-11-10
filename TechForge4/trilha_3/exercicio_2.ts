abstract class FiguraGeometrica {
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  raio: number;

  constructor(raio: number) {
    super();
    this.raio = raio;
  }

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

class Quadrado extends FiguraGeometrica {
  lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado ** 2;
  }
}

class Triangulo extends FiguraGeometrica {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

// Função para imprimir a área de um array de figuras
function imprimirAreas(figuras: FiguraGeometrica[]): void {
  figuras.forEach(figura => {
    console.log(`Área: ${figura.calcularArea().toFixed(2)}`);
  });
}

// Exemplo de uso:
const figuras: FiguraGeometrica[] = [
  new Circulo(5),
  new Quadrado(4),
  new Triangulo(6, 8)
];

imprimirAreas(figuras);