import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class DataService {
  public mySession = {}; // Contains session data.
  private messageSource = new BehaviorSubject<string>("-");
  currentMessage = this.messageSource.asObservable();

  private messageSource22 = new BehaviorSubject<string>("-");
  currentMessage22 = this.messageSource22.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  changeMessage22(message: string) {
    this.messageSource22.next(message)
  }

  set(left:string, right:any) {
    this.mySession[left] = right;
  }

  get(left:string) {
    return this.mySession[left];
  }


}