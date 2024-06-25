import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ITodoItem } from '../interfaces/todo-item.dt';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  private readonly todoList$ = new BehaviorSubject<Array<ITodoItem>>([]);

  setTodoList(todoList: Array<ITodoItem>): void {
    this.todoList$.next(todoList);
  }

  getTodoList(): Observable<Array<ITodoItem>> {
    return this.todoList$.asObservable();
  }

  createTodoItem(item: ITodoItem): Observable<boolean> {
    let todoList: ITodoItem[] = this.todoList$.value;
    if (todoList) {
      // todoList.push(item);
      todoList = [...todoList, item];
      this.todoList$.next(todoList);
      return of(true);
    }
    return of(false);
  }

  deleteTodoItem(item: ITodoItem): Observable<boolean> {
    let todoList: ITodoItem[] = this.todoList$.value;
    if (item) {
      const newList = todoList.filter(
        (x: ITodoItem) =>
          x.todoTitle.toLowerCase() !== item.todoTitle.toLowerCase()
      );
      this.todoList$.next(newList);
      return of(true);
    }
    return of(false);
  }

  updateTodoItem(item: ITodoItem): Observable<boolean> {
    let todoList: ITodoItem[] = this.todoList$.value;
    if (todoList) {
      const index = todoList.findIndex(
        (x: ITodoItem) =>
          x.todoTitle.toLowerCase() === item.todoTitle.toLowerCase()
      );
      if (index > -1) todoList[index] = item;
      this.todoList$.next(todoList);
      return of(true);
    }
    return of(false);
  }
}
