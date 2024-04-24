import { Injectable } from '@angular/core';
import { Todos } from './Todos';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  TodoData: Todos[] = [];
  constructor() {
    let data = localStorage.getItem('todos');
    if (data) {
      this.TodoData = JSON.parse(data);
    } else {
      this.TodoData = [];
    }
  }

  getTodo(): Todos[] {
    return this.TodoData;
  }

  addTodo(todo: Todos): void {
    this.TodoData.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.TodoData));
  }

  deleteTodo(todo: Todos): void {
    let newTodo = this.TodoData.filter((elem) => {
      return elem.srno !== todo.srno;
    });
    this.TodoData = newTodo;
    console.log(this.TodoData);
    localStorage.setItem('todos', JSON.stringify(this.TodoData));
  }
}
