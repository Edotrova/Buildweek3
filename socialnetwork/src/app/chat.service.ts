import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenCrudService } from './gencrud.service';
import { Chat } from './models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends GenCrudService<Chat>{

  constructor(private http:HttpClient) {
    super(http, 'http://localhost:3000/chat' )
   }
}
