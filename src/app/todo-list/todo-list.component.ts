import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { TodoComponent } from '../todo/todo.component';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoComponent,
    CommonModule,
    NewTodoComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  title: string = 'Todo List';
  todoService: TodoService = inject(TodoService);
  todoList: Todo[] = [];


  ngOnInit() {
    
    this.todoService.httpGetAllTodos().subscribe((todos) => {
      this.todoList = todos;
    });
    this.todoService.todoListUpdated.subscribe((updatedTodos: Todo[]) =>  {
      this.todoList = updatedTodos; 
    });
  }
}
