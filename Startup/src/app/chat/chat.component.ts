import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private socket: any;
  messages: { content: string; timestamp: string }[] = [];
  newMessage: string = '';
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef<any>;
  users: string[] = [];
  privateMessages: { user: string; message: string }[] = [];
  typingUsers: string[] = [];

  constructor() { }

  ngOnInit() {
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (message: { content: string; timestamp: string }) => {
      this.messages.push(message);
      this.scrollChatToBottom();
    });

    this.socket.on('userJoined', (user: string) => {
      this.users.push(user);
    });

    this.socket.on('userLeft', (user: string) => {
      const index = this.users.indexOf(user);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.socket.emit('message', this.newMessage);
      this.messages.push({
        content: this.newMessage,
        timestamp: this.getCurrentTimestamp()
      });
      this.newMessage = '';
      this.scrollChatToBottom();
    }
  }

  getCurrentTimestamp(): string {
    const date = new Date();
    const hours = this.formatTime(date.getHours());
    const minutes = this.formatTime(date.getMinutes());
    return `${hours}:${minutes}`;
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  private scrollChatToBottom() {
    setTimeout(() => {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    });
  }

  startTyping() {
    if (!this.typingUsers.includes('Você')) {
      this.typingUsers.push('Você');
      this.socket.emit('startTyping');
    }
  }

  stopTyping() {
    const index = this.typingUsers.indexOf('Você');
    if (index !== -1) {
      this.typingUsers.splice(index, 1);
      this.socket.emit('stopTyping');
    }
  }

  sendPrivateMessage(user: string) {
    // Implemente a lógica para enviar uma mensagem privada para o usuário selecionado
  }

  exitChat() {
    // Implemente a lógica para sair do chat
  }
}
