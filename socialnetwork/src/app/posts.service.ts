import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenCrudService } from './gencrud.service';
import { Posts } from './models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends GenCrudService <Posts>{

  constructor(private http:HttpClient) {
    super(http, 'http://localhost:3000/posts')
   }

   urlPost:string = 'http://localhost:3000/posts'

getPostByAuthor(author:string){
  return this.http.get<Posts[]>(this.urlPost+ '/?autor='+ author)
}

  }

 
