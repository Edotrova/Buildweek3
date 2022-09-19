import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class GenCrudService<T> {

  constructor(private httpC:HttpClient, @Inject(String) protected apiUrl : string) { }

  getAll():Observable<T[]> {
    return this.httpC.get<T[]>(this.apiUrl)
  }

  add(x: T) {
    return this.httpC.post<T>(this.apiUrl,x)
  }

  edit(x: T, id : number | undefined) {
    return this.httpC.patch<T>(this.apiUrl+'/'+id,x)
  }

  delete(id: number | undefined) {
    return this.httpC.delete<T>(this.apiUrl+'/'+id)
  }

}