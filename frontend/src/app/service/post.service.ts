import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  // url = "https://jsonplaceholder.typicode.com/posts"
  url = "http://localhost:8000"
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`)
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/posts/${id}`) 
  }

  addPost(post: any): Observable<Post> {
    return this.http.post<Post>(`${this.url}/add-post`, post)
  }
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/posts/${id}`)
  }
  updatePost(id:number,post:any){
    console.log(id);
    
    return this.http.put(`${this.url}/edit-post/${id}`,post)
  }
}
