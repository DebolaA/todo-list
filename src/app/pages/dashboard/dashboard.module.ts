import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TodoItemComponent } from 'src/app/components/todo-item/todo-item.component';
import { AddTodoItemComponent } from 'src/app/components/add-todo-item/add-todo-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    TodoItemComponent,
    AddTodoItemComponent,
    CommonModule,
  ],
})
export class DashboardModule {}
