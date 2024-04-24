import { Component } from '@angular/core';
import { Todos } from '../../Todos';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoDataService } from '../../todo-data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  public Todo = new FormGroup(
    {
      todoname: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern(/^[a-zA-Z0-9\s]+$/),
      ]),
      assign_to: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\s]+$/),
      ]),
      description: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    },
    { validators: [] }
  );
  constructor(private dataService: TodoDataService) {}

  onSubmit() {
    let todo: Todos = {
      srno: this.dataService.getTodo().length + 1,
      todoname: this.Todo.value.todoname,
      assign_to: this.Todo.value.assign_to,
      description: this.Todo.value.description,
      priority: this.Todo.value.priority,
      date: this.Todo.value.date,
    };
    // console.log(this.Todo.get('todoname')?.hasError('required'));
    this.dataService.addTodo(todo);
  }

  checkError(target: string, validation: string): boolean | undefined {
    return this.Todo.get(target)?.hasError(validation); // we can write same syntax in template also 
  }

}
