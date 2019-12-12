import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-form.service'

import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(
        res => this.todos = res,
        err => console.log(err)
      )
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id)
      .subscribe(
        res => {
          console.log(res);
          this.getTodos();
        },
        err => console.log(err)
      )
  }
}
