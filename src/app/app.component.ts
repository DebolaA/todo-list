import { Component } from '@angular/core';
import { EndpointService } from './services/endpoint.service';
import { ITodoItem } from './interfaces/todo-item.dt';
import { TodoList } from './interfaces/todo-list.dt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  todoList: ITodoItem[] = TodoList;

  constructor(private endpointService: EndpointService) {
    this.endpointService.setTodoList(this.todoList);
    // console.log(this.todoList);
  }
}
