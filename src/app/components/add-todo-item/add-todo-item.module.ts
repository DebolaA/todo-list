import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoItemComponent } from './add-todo-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInputModule } from '../custom-input/custom-input.module';

@NgModule({
  declarations: [AddTodoItemComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomInputModule],
  exports: [AddTodoItemComponent],
})
export class AddTodoItemModule {}
