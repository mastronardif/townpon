import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  public mySession = {}; // Contains session data.
  private messageSource = new BehaviorSubject<string>("-");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  set(left:string, right:any) {
    this.mySession[left] = right;
  }

  get(left:string) {
    return this.mySession[left];
  }


}