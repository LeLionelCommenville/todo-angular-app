import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {

  todoService : TodoService = inject(TodoService);

  todoForm = new FormGroup({
    todoTitle: new FormControl(''),
    todoContent: new FormControl('')
  })

  submitTodo() {
    this.todoService.addTodo(
      this.todoForm.value.todoTitle ?? '',
      this.todoForm.value.todoContent ?? ''
    )
  }
}
