import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { DirectiveModule } from 'src/app/directives/directive.module';

@NgModule({
  declarations: [TodoItemComponent],
  imports: [CommonModule, DirectiveModule],
  exports: [TodoItemComponent],
})
export class TodoItemModule {}
