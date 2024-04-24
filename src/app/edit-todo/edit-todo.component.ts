import { Component, Input, inject } from '@angular/core';
import { Todo } from '../todo';
import { FormControl, FormGroup, ReactiveFormsModule}  from '@angular/forms';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent {
  @Input() todo!: Todo;
  todoService : TodoService = inject(TodoService);

  editTodoForm = new FormGroup({
    todoTitle: new FormControl(),
    todoContent: new FormControl() ,
  })

  editTodo(){
    this.todoService.editTodo(
      this.todo.id,
      this.editTodoForm.value.todoTitle ?? '',
      this.editTodoForm.value.todoContent ?? '',
      10,
      true
    )
  }
}
