import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todo, TodoCreate } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private idCount = 1;
  private todosSubject: BehaviorSubject<Todo[]>;
  todos$: Observable<Todo[]>;

  constructor() {
    this.todosSubject = new BehaviorSubject<Todo[]>([]);
    this.todos$ = this.todosSubject.asObservable();
  }

  createTodo(todo: TodoCreate) {
    this.todosSubject.next([...this.todosSubject.value, { ...todo, id: this.idCount++ }]);
  }

  deleteTodo(id: number) {
    const index = this.todosSubject.value.findIndex((todo) => todo.id === id);
    const todos = this.todosSubject.value;
    todos.splice(index, 1);
    this.todosSubject.next(todos);
  }
}
