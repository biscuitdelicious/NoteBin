import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.scss'
})
export class SendMessageComponent {
  messageToSend: string = '';

  constructor (private chatService: ChatService) {}

  sendMessage() {
    this.chatService.addMessage(this.messageToSend);
    this.messageToSend = '';
  }
}
