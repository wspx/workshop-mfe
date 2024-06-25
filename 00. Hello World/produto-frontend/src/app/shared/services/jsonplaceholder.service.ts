import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './models/todo.type';
import { Comment } from './models/comments.type';

@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {

  private readonly URL_BASE = 'https://jsonplaceholder.typicode.com';

  constructor(
    private readonly http: HttpClient
  ) { }


  public getAllTodos() {
    return this.http.get<Todo[]>(`${this.URL_BASE}/posts`);
  }

  public getAllComments() {
    return this.http.get<Comment[]>(`${this.URL_BASE}/comments`);
  }
}
