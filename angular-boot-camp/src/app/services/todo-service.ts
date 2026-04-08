import { Injectable } from '@angular/core';
import { Todo } from './todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Array<Todo> = [{
    name: "efizjef",
    id: 1,
    completed: false
  },
  {
    name: "efq",
    id: 2,
    completed: false
  }
  ]
}
