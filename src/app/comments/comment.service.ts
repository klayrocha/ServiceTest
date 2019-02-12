import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Comment } from './comment.modelo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable()
export class CommentService {
 
  constructor(private http: Http) { }
 
  getComments(): Observable<Comment[]>{
        console.log("Chegou aqui no getComments ");
        return this.http.get('https://jsonplaceholder.typicode.com/comments')
                .pipe(
                  map(response => response.json())
                );
  }
 
}