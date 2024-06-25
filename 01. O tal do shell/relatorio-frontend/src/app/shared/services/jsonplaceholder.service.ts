import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post.type';
import { User } from './models/user.type';

@Injectable({ providedIn: 'root' })
export class JsonPlaceholderService {

  private readonly URL_BASE = 'https://jsonplaceholder.typicode.com';

  constructor(
    private readonly http: HttpClient
  ) { }


  public getAllPosts() {
    return this.http.get<Post[]>(`${this.URL_BASE}/posts`);
  }

  public getAllUsers() {
    return this.http.get<User[]>(`${this.URL_BASE}/users`);
  }
}
