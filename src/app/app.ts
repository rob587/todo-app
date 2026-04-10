import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo, TodoService } from './services/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskNuova = '';
  constructor(private todoService: TodoService) {}

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }
  aggiungiTodo() {
    if (this.taskNuova.trim() === '') return;

    this.todoService.aggiungiTodo(this.taskNuova);
    this.taskNuova = '';
  }

  eliminaTodo(id: number) {
    this.todoService.eliminaTodo(id);
  }
}
