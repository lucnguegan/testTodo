import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo-form.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = {
    nameTodo: '',
    completed: false
  };

  nameTodo: string = '';
  todos: any = [];
  todoObj: any;



  constructor(
    private todoFormService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.todoFormService.getTodo(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.todo = res;
          },
          err => console.log(err)
        )
    }

  }



  addDataBase() {
    this.todoObj = {
      nameTodo: this.nameTodo,
      completed: false
    }



  }

  submitTodo() {
    console.log(this.nameTodo);
    this.addDataBase();
    this.todoFormService.createTodo(this.todoObj)
      .subscribe(
        res => {
          console.log(res);
          this.todos.push(res);
          // this.router.navigate(['/']);
          this.nameTodo = '';
        },
        err => console.log(err)
      )
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    console.log(" gelöscht!!");
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index      
    for (let i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }

  editTodo(index) {
    // this.todos.put(index, 1);
    console.log("function edit not yet available");
    alert("function edit not yet available");
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  sayHello() {
    return;
  }

  createTodo() {

    return;

  }



}
