import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { ViewTodoComponent } from './Components/view-todo/view-todo.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TodoDataService } from './todo-data.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    ViewTodoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
