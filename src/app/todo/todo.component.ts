import { Component, Input, inject } from '@angular/core';
import { Todo } from '../todo';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [EditTodoComponent, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  todoService : TodoService = inject(TodoService);
  showEditModal = false;

  toggleModal() {
    this.showEditModal = !this.showEditModal;
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todo); 
  }
}
