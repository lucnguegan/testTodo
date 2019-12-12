import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`/todos`);
  }

  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`/todos/${id}`);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`/todos`, todo);
  }
  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`/todos/delete?todoID=${id}`);
  }
  updateTodo(id: string, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`/todos/update?todoID=${id}`, todo);
  }
}
