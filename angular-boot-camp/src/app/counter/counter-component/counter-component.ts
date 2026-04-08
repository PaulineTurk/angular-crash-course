import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../services/todo.type';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.scss',
})
export class CounterComponent implements OnInit {
  todoService = inject(TodoService)
  counter = signal(0)
  todoes = signal<Array<Todo>>([])

  ngOnInit(): void {
    this.todoes.set(this.todoService.todos)
  }

  handlerCounterClick() {
    this.counter.update(value => value + 1)
  }
}
