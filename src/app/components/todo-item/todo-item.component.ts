import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ISubmitInput } from 'src/app/interfaces/text-input.dt';
import { ITodoItem } from 'src/app/interfaces/todo-item.dt';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: true,
  imports: [CustomButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: ITodoItem | undefined = undefined;
  @Output() deleteEvent = new EventEmitter<ITodoItem>();
  tooltipBtnDisabled: boolean = false;
  tooltipContent: ISubmitInput = {
    codeType: 'Submit',
    id: 'todoItemTooltip',
    name: 'todoItemTooltip',
    text: '',
    disabled: false,
    tooltip: this.todoItem?.todoDescription,
    class: 'icon-btn',
  };
  deleteBtnContent: ISubmitInput = {
    codeType: 'Submit',
    id: 'todoItemDelete',
    name: 'todoItemDelete',
    text: '',
    disabled: false,
    class: 'icon-btn',
  };
  completeBtnContent: ISubmitInput = {
    codeType: 'Submit',
    id: 'todoItemComplete',
    name: 'todoItemComplete',
    text: '',
    disabled: false,
    class: 'icon-btn',
  };

  constructor() {}

  ngOnInit(): void {
    this.tooltipContent.tooltip = this.todoItem?.todoDescription;
  }

  deleteTodoItem() {
    this.deleteEvent.emit(this.todoItem);
  }
  markTaskComplete() {
    const item = document.querySelector(`#${this.todoItem?.todoTitle}`);
    if (item) {
      item.classList.toggle('cancel');
    }
  }
}
