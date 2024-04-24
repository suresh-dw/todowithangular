import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { ViewTodoComponent } from './Components/view-todo/view-todo.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TodosComponent } from './Components/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'add_todo', component: AddTodoComponent },
  { path: 'view_todo', component: ViewTodoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
