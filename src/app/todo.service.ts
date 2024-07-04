import { EventEmitter, Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TodoService {
 
  
  constructor(
    private http: HttpClient,
  ) {};

  
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  todoListUpdated = new EventEmitter<Todo[]>();
  protected todoList: Todo[] = [
    {
      id: 1,
      title: 'Create a Todo Service',
      content: "We need a Todo Service for managing the todo list with some functions",
      completion: 50,
      done: false
    },
    {
      id: 2,
      title: 'Create a Todo list component',
      content: "We need a Todo list component how will show the list of todo",
      completion: 0,
      done: false
    },
    {
      id: 3,
      title: 'Create a Todo  component',
      content: "We need a Todo component showing a todo in the user interface",
      completion: 0,
      done: false
    },
  ]
  url = 'http://localhost:3000/todos';

  async getAllTodos(): Promise<Todo[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  httpGetAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
  

  async getTodoById(id: number): Promise<Todo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  deleteTodo(todo: Todo) {
    this.todoList = this.todoList.filter((t) => t !== todo);
    this.todoListUpdated.emit(this.todoList);
  }

  addTodo(title: string, content: string) {
    let newTodo : Todo = {
      id: TodoService.length - 1,
      title: title,
      content : content,
      completion: 0,
      done: false
    }
    this.todoList.push(newTodo);
    this.todoListUpdated.emit(this.todoList);
  }


  HttpAddTodo(title: string, content: string): Observable<Todo> {
    let newTodo : Todo = {
      id: TodoService.length - 1,
      title: title,
      content : content,
      completion: 0,
      done: false
    }
    return this.http.post<Todo>(this.url, newTodo, this.httpOptions);
  }

  editTodo(id: number, title: string, content: string, completion: number, done: boolean) {
    let editedTodo: Todo =  {
      id: id,
      title: title,
      content: content,
      completion: completion,
      done: done
    }
    const index = this.todoList.findIndex((todo) => todo.id === id);
    this.todoList[index] = editedTodo;
  }

}
