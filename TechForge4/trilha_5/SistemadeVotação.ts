// Classe abstrata
abstract class VoteSystem {
  protected votos: Record<string, number>;

  constructor() {
    this.votos = {};
  }

  abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

// Subclasse Election
class Election extends VoteSystem {
  voteFor(candidate: string): void {
    if (this.votos[candidate] !== undefined) {
      this.votos[candidate]++;
    } else {
      this.votos[candidate] = 1;
    }
    console.log(`Voto adicionado para ${candidate}. Total atual: ${this.votos[candidate]}`);
  }

  getResults(): Record<string, number> {
    return { ...this.votos }; // Retorna uma cópia do objeto com os votos
  }
}

// Subclasse Poll
class Poll extends VoteSystem {
  voteFor(candidate: string): void {
    if (this.votos[candidate] !== undefined) {
      this.votos[candidate]++;
    } else {
      this.votos[candidate] = 1;
    }
    console.log(`Voto adicionado para ${candidate}. Total atual: ${this.votos[candidate]}`);
  }

  getResults(): { candidato: string; votos: number }[] {
    // Converte o objeto de votos em um array e ordena por votos (decrescente)
    return Object.entries(this.votos)
      .map(([candidato, votos]) => ({ candidato, votos }))
      .sort((a, b) => b.votos - a.votos);
  }
}

// Exemplo de uso:
const eleicao = new Election();
const enquete = new Poll();

eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato B");
eleicao.voteFor("Candidato A");
eleicao.voteFor("Candidato C");

enquete.voteFor("Opção X");
enquete.voteFor("Opção Y");
enquete.voteFor("Opção X");
enquete.voteFor("Opção Y");
enquete.voteFor("Opção Z");

console.log("Resultados da Eleição:", eleicao.getResults());
console.log("Resultados da Enquete (ordenados por votos):", enquete.getResults());