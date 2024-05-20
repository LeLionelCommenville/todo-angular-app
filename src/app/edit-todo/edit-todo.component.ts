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
  editTodoForm! : FormGroup;

  ngOnInit() {
    this.editTodoForm = new FormGroup({
      todoTitle: new FormControl(this.todo.title),
      todoContent: new FormControl(this.todo.content),
      todoCompletion: new FormControl(this.todo.completion)
    })
  }

  editTodo(){
    this.todoService.editTodo(
      this.todo.id,
      this.editTodoForm.value.todoTitle ?? '',
      this.editTodoForm.value.todoContent ?? '',
      this.editTodoForm.value.todoCompletion ?? 0,
      true
    )
  }
}
