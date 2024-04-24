import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [EditTodoComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: Todo;
}
