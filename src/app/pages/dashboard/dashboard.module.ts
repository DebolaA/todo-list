import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddTodoItemModule } from 'src/app/components/add-todo-item/add-todo-item.module';
import { TodoItemModule } from 'src/app/components/todo-item/todo-item.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AddTodoItemModule,
    TodoItemModule,
  ],
})
export class DashboardModule {}
