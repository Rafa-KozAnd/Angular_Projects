import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;
  private readonly url = 'http://localhost:3000'; // URL do servidor de chat

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  public getMessages = () => {
    return new Observable(observer => {
      this.socket.on('message', (data: string) => {
        observer.next(data);
      });
    });
  }
}
