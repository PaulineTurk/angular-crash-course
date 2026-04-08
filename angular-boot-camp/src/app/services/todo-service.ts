import { Injectable, inject } from '@angular/core';
import { Todo } from './todo.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient)

  getTodosFromApi() {
    const url = "https://jsonplaceholder.typicode.com/todos"
    return this.http.get<Array<Todo>>(url)
  }

  todos: Array<Todo> = [{
    userId: 1,
    id: 1,
    title: "efizjef",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "efq",
    completed: false
  }
  ]
}
