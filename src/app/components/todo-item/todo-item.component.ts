import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ITodoItem } from 'src/app/interfaces/todo-item.dt';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: ITodoItem | undefined;
  @Output() deleteEvent = new EventEmitter<ITodoItem>();

  constructor() {}

  ngOnInit(): void {}

  deleteTodoItem() {
    this.deleteEvent.emit(this.todoItem);
  }
  markTaskComplete(evt: Event) {
    const item = document.querySelector(`#${this.todoItem?.todoTitle}`);
    if (item) {
      item.classList.toggle('cancel');
    }
  }
}
