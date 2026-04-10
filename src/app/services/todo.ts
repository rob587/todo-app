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
    if (this.taskNuova.trim() === '') {
      this.taskAggiunta = true;
    }
  }
}
