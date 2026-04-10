import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  nome: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  grandeTitolo = 'La tua lista personale';

  private todos: Todo[] = [
    {
      id: 1,
      nome: 'cico',
      status: false,
    },
    {
      id: 2,
      nome: 'popo',
      status: true,
    },
    {
      id: 3,
      nome: 'dodo',
      status: false,
    },
    {
      id: 4,
      nome: 'pupu',
      status: true,
    },
    {
      id: 5,
      nome: 'dende',
      status: false,
    },
  ];

  getTodos() {
    return this.todos;
  }

  taskAggiunta = false;

  taskNuova = '';
  nuovoStatus = '';

  aggiungiTodo(nome: string) {
    const newId = Math.max(...this.todos.map((t) => t.id), 0) + 1;
    this.todos.push({
      id: newId,
      nome: nome,
      status: false,
    });
  }

  eliminaTodo(id: number): void {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  isItCompleted = false;

  completaTask(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.status = !todo.status;
    }
  }

  contaTask() {
    return this.todos.length;
  }

  contaCompletati(): number {
    return this.todos.filter((t) => t.status).length;
  }
}
