import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoItem } from 'src/app/interfaces/todo-item.dt';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: ITodoItem | undefined;
  @Output() deleteEvent = new EventEmitter<ITodoItem>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.todoItem);
  }

  deleteTodoItem() {
    this.deleteEvent.emit(this.todoItem);
  }
}
