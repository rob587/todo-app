import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo, TodoService } from './services/todo';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskNuova = '';
  taskAggiunta = false;
  taskError = false;
  constructor(private todoService: TodoService) {}

  get grandeTitolo(): string {
    return this.todoService.grandeTitolo;
  }

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }
  aggiungiTodo(): void {
    if (this.taskNuova.trim() === '') {
      this.taskError = true;
      this.taskAggiunta = false;
      return;
    }

    this.taskError = false;
    this.todoService.aggiungiTodo(this.taskNuova);
    this.taskAggiunta = true;
    this.taskNuova = '';

    setTimeout(() => {
      this.taskAggiunta = false;
    }, 2000);
  }

  eliminaTodo(id: number) {
    this.todoService.eliminaTodo(id);
  }

  completaTodo(id: number) {
    this.todoService.completaTask(id);
  }

  contaTask(): number {
    return this.todoService.contaTask();
  }

  contaCompletati(): number {
    return this.todoService.contaCompletati();
  }
}
