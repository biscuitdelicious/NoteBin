import {EventEmitter, Injectable, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages = new BehaviorSubject<string[]>([]);

  messageToSend$ = this.messages.asObservable()

  addMessage(messageToSend: string) {
    let currentMessage = this.messages.getValue();

    this.messages.next([...currentMessage, messageToSend]);
  }

  constructor() { }
}
