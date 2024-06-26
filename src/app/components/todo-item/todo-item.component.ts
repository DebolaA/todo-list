import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BckgndColorDirective } from 'src/app/directives/bckgnd-color.directive';
import { ElDisabledDirective } from 'src/app/directives/el-disabled.directive';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { ITodoItem } from 'src/app/interfaces/todo-item.dt';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  hostDirectives: [
    { directive: BckgndColorDirective, inputs: ['backgndcolor'] },
    { directive: TooltipDirective },
    { directive: ElDisabledDirective, inputs: ['elDisabled'] },
  ],
  standalone: true,
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: ITodoItem | undefined;
  @Output() deleteEvent = new EventEmitter<ITodoItem>();
  iconBtn: string = 'info';
  deleteBtn: string = 'danger';
  completeBtn: string = 'success';

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
