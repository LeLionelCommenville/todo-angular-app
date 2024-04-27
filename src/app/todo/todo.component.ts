import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [EditTodoComponent, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
  showEditModal = false;

  toggleModal(){
    this.showEditModal = !this.showEditModal;
  }
}
