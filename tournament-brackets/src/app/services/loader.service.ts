import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new Subject<boolean>();
  constructor() { }

  getLoading(){
    return this.isLoading;
  }

  show() {
    this.isLoading.next(true);
 }

 hide() {
    this.isLoading.next(false);
 }
}
