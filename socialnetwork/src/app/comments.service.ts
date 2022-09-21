import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenCrudService } from './gencrud.service';
import { Comments } from './models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends GenCrudService <Comments>{

  constructor(private http:HttpClient) {
    super(http, 'http://localhost:3000/comments')
   }

getCommentsByPostId(postid:string){
  return this.http.get<Comments[]>(this.apiUrl + '/?postid=' + postid) 
}


  }
