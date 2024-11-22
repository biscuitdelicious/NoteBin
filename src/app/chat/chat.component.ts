import { Component } from '@angular/core';
import {SendMessageComponent} from './send-message/send-message.component';
import {MessagesListComponent} from './messages-list/messages-list.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    SendMessageComponent,
    MessagesListComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
