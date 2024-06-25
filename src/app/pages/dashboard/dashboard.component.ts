import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ITodoItem } from 'src/app/interfaces/todo-item.dt';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  errorMessageSubject = new BehaviorSubject<string>('');
  errorMessageAction$ = this.errorMessageSubject.asObservable();

  todoItemList = new BehaviorSubject<ITodoItem[]>([]);
  todoItemList$ = this.todoItemList.asObservable();
  constructor(private endpointService: EndpointService) {}

  ngOnInit(): void {
    this.getTodoItems();
  }

  getTodoItems() {
    this.endpointService
      .getTodoList()
      .pipe(
        catchError((error) => {
          this.errorMessageSubject.next(error);
          return of([]);
        })
      )
      .subscribe({
        next: (todoItem: ITodoItem[]) => {
          this.todoItemList.next(todoItem);
        },
        error: (error: any) => console.log(error),
      });
  }

  deleteTodoItem(todoItem: ITodoItem) {
    this.endpointService.deleteTodoItem(todoItem).subscribe({
      next: (res: boolean) => {
        if (res)
          this.errorMessageSubject.next('Successfully deleted todo item');
        else this.errorMessageSubject.next('Unable to delete todo item');
      },
      error: (error: any) => {
        this.errorMessageSubject.next('Unable to delete todo item');
      },
    });
  }
}
