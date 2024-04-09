import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  protected todoList: Todo[] = [
    {
      id: 0,
      title: 'Create a Todo Service',
      content: "We need a Todo Service for managing the todo list with some functions",
      completion: 50,
      done: false
    },
    {
      id: 1,
      title: 'Create a Todo list component',
      content: "We need a Todo list component how will show the list of todo",
      completion: 0,
      done: false
    },
    {
      id: 2,
      title: 'Create a Todo  component',
      content: "We need a Todo component showing a todo in the user interface",
      completion: 0,
      done: false
    },
  ]

  getAllTodos(): Todo[] {
    return this.todoList
  }

  getTodoById(id: number): Todo {
    return this.todoList[id];
  }

  deleteTodo(todo: Todo): Todo[] {
    return this.todoList = this.todoList.filter((t) => t !== todo);
  }

  constructor() { }

}
