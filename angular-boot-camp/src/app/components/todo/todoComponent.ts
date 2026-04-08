import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { catchError } from 'rxjs';
import { Todo } from '../../models/todo.type';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todoComponent.html',
  styleUrl: './todoComponent.scss',
})
export class TodoComponent {
  todoService = inject(TodoService)
  todoItems = signal<Array<Todo>>([])

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err)
          throw err
        }
        ))
      .subscribe(
        (todos) => {
          this.todoItems.set(todos)
        }
      )

  }

}
