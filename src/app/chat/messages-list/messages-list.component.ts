import {Component, OnInit} from '@angular/core';
import { EmojisPipe } from '../../shared/emojis.pipe';
import { ChatService } from '../chat.service';
import { CommonModule } from '@angular/common';
import {Observable} from 'rxjs';
import {
  AlertInnerTextOnClickDirective
} from '../../shared/alert-inner-text-on-click.directive';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [EmojisPipe, CommonModule, AlertInnerTextOnClickDirective],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.scss'
})
export class MessagesListComponent implements OnInit {
  message_list$: Observable<string[]> | undefined;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.message_list$ = this.chatService.messageToSend$;
  }
}


