import { CommonModule } from '@angular/common';
import { EndpointService } from './../../services/endpoint.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { BckgndColorDirective } from 'src/app/directives/bckgnd-color.directive';
import { ElDisabledDirective } from 'src/app/directives/el-disabled.directive';
import { TooltipDirective } from 'src/app/directives/tooltip.directive';
import { ITextInput } from 'src/app/interfaces/text-input.dt';
import { CustomInputModule } from '../custom-input/custom-input.module';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
  hostDirectives: [
    { directive: BckgndColorDirective, inputs: ['backgndcolor'] },
    { directive: TooltipDirective },
    { directive: ElDisabledDirective, inputs: ['elDisabled'] },
  ],
  standalone: true,
  imports: [CommonModule, CustomInputModule, FormsModule, ReactiveFormsModule],
})
export class AddTodoItemComponent implements OnInit {
  errorMessageSubject = new BehaviorSubject<string>('');
  errorMessageAction$ = this.errorMessageSubject.asObservable();

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
    todoDescription: new FormControl('', Validators.required),
  });

  constructor(private endpointService: EndpointService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const val = this.todoItemForm.value;
    if (val) {
      this.endpointService.createTodoItem(val).subscribe({
        next: (res: boolean) => {
          if (res) this.resetForm();
          this.errorMessageSubject.next('To do item successfully created');
        },
        error: (error: Error) => {
          console.log('');
          this.errorMessageSubject.next('Unable to create new to do item');
        },
      });
    }
  }

  resetForm(): void {
    this.todoItemForm = new FormGroup({
      todoTitle: new FormControl('', Validators.required),
      todoDescription: new FormControl('', Validators.required),
    });
  }
}
