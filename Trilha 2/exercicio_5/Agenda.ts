class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
    console.log(`Compromisso "${compromisso}" adicionado com sucesso.`);
  }

  listarCompromissos(): void {
    if (this.compromissos.length === 0) {
      console.log("Nenhum compromisso agendado.");
    } else {
      console.log("Compromissos:");
      this.compromissos.forEach((compromisso, index) => {
        console.log(`${index + 1}. ${compromisso}`);
      });
    }
  }
}

// Exemplo de uso:
const minhaAgenda = new Agenda();
minhaAgenda.adicionarCompromisso("Reunião com a equipe");
minhaAgenda.adicionarCompromisso("Almoço com cliente");
minhaAgenda.listarCompromissos();