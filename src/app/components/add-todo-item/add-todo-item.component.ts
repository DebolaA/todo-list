import { EndpointService } from './../../services/endpoint.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITextInput } from 'src/app/interfaces/text-input.dt';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
})
export class AddTodoItemComponent implements OnInit {
  public todoItemContent: ITextInput = {
    codeType: 'AlphaText',
    id: 'todo-item',
    required: true,
    label: 'Todo Item Title',
    disabled: false,
    placeholder: 'Todo Item Title',
    formFieldName: 'todoTitle',
  };

  todoItemForm: FormGroup = new FormGroup({
    todoTitle: new FormControl('', Validators.required),
    todoDesc: new FormControl('', Validators.required),
  });

  constructor(private endpointService: EndpointService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const val = this.todoItemForm.value;
    if (val) {
      this.endpointService.createTodoItem(val);
    }
  }
}
