import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../todo-data.service';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrl: './view-todo.component.css',
})
export class ViewTodoComponent implements OnInit {
  public todos: Todos[] = [];
  constructor(private todoData: TodoDataService) {}

  ngOnInit(): void {
    this.todos = this.todoData.getTodo();
  }
  deleteTodo(todo: Todos) {
    this.todoData.deleteTodo(todo);
    this.todos = this.todoData.getTodo();
  }
}
