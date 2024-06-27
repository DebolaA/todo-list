import { CommonModule } from '@angular/common';
import { EndpointService } from './../../services/endpoint.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ISubmitInput, ITextInput } from 'src/app/interfaces/text-input.dt';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CustomInputModule,
    FormsModule,
    ReactiveFormsModule,
    CustomButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  public submitBtnContent: ISubmitInput = {
    codeType: 'Submit',
    id: 'submitBtn',
    name: 'submitBtn',
    text: 'Add Item',
    disabled: this.todoItemForm.invalid,
  };
  submitBtnDisabled: boolean = this.todoItemForm?.invalid;

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
