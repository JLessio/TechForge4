class Temperatura {
  valor: number; // em Celsius

  constructor(valor: number) {
    this.valor = valor;
  }

  paraFahrenheit(): number {
    return (this.valor * 9/5) + 32;
  }

  paraKelvin(): number {
    return this.valor + 273.15;
  }
}

// Exemplo de uso:
const tempCelsius = new Temperatura(25);
console.log(`Celsius: ${tempCelsius.valor}°C`);
console.log(`Fahrenheit: ${tempCelsius.paraFahrenheit()}°F`);
console.log(`Kelvin: ${tempCelsius.paraKelvin()}K`);