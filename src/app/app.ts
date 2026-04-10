import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo, TodoService } from './services/todo';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskNuova = '';
  constructor(private todoService: TodoService) {}

  get grandeTitolo(): string {
    return this.todoService.grandeTitolo;
  }

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

  // completaTodo(id: number) {
  //   this.todoService.completaTodo(id);
  // }

  contaTask(): number {
    return this.todoService.contaTask();
  }

  contaCompletati(): void {
    return this.todoService.contaCompletati();
  }
}
