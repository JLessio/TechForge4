// Interface para representar uma tarefa com tipo
interface Tarefa {
  descricao: string;
  tipo: 'projeto' | 'diaria';
}

// Classe abstrata
abstract class TaskManager {
  protected tarefas: Tarefa[];

  constructor() {
    this.tarefas = [];
  }

  abstract addTask(task: string): void;
  abstract listTasks(): string[];
}

// Subclasse Project
class Project extends TaskManager {
  nome: string;

  constructor(nome: string) {
    super();
    this.nome = nome;
  }

  addTask(task: string): void {
    const novaTarefa: Tarefa = { descricao: task, tipo: 'projeto' };

    // Verifica se a tarefa já existe no projeto
    const jaExiste = this.tarefas.some(t => t.descricao === task && t.tipo === 'projeto');

    if (!jaExiste) {
      this.tarefas.push(novaTarefa);
      console.log(`Tarefa '${task}' adicionada ao projeto '${this.nome}'.`);
    } else {
      console.log(`A tarefa '${task}' já existe no projeto '${this.nome}'.`);
    }
  }

  listTasks(): string[] {
    return this.tarefas
      .filter(t => t.tipo === 'projeto')
      .map(t => t.descricao);
  }
}

// Subclasse DailyTasks
class DailyTasks extends TaskManager {
  addTask(task: string): void {
    const novaTarefa: Tarefa = { descricao: task, tipo: 'diaria' };

    // Verifica se a tarefa já existe nas tarefas diárias
    const jaExiste = this.tarefas.some(t => t.descricao === task && t.tipo === 'diaria');

    if (!jaExiste) {
      this.tarefas.push(novaTarefa);
      console.log(`Tarefa diária '${task}' adicionada.`);
    } else {
      console.log(`A tarefa diária '${task}' já foi adicionada.`);
    }
  }

  listTasks(): string[] {
    return this.tarefas
      .filter(t => t.tipo === 'diaria')
      .map(t => t.descricao);
  }
}

// Exemplo de uso:
const projetoExemplo = new Project("Site da Empresa");
const tarefasDiarias = new DailyTasks();

projetoExemplo.addTask("Desenvolver front-end");
projetoExemplo.addTask("Escrever documentação");
projetoExemplo.addTask("Desenvolver front-end"); // Tarefa duplicada

tarefasDiarias.addTask("Responder e-mails");
tarefasDiarias.addTask("Reunião matinal");
tarefasDiarias.addTask("Responder e-mails"); // Tarefa duplicada

console.log("Tarefas do Projeto:", projetoExemplo.listTasks());
console.log("Tarefas Diárias:", tarefasDiarias.listTasks());