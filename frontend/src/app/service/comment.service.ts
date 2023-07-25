import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comment: string[] = []
  commentPostIdSubject: any[] = []
  id: string | null | undefined;
  url = "http://localhost:8000"
  constructor(private route: ActivatedRoute,private http:HttpClient) { }

  setComment(commet: string) {
    this.comment.push(commet)
  }
  getComment(id:number) {
    return this.http.get(`${this.url}/posts/${id}`)
  }
  addComment(comment: string,id:number) {
    return this.http.post(`${this.url}/add-comment/${id}`,comment)

  }
  getPostIdSubject() {
    return this.commentPostIdSubject
  }
  
  // getPost(){

  //   this.
  // }
}
