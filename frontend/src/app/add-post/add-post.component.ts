import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  title: string = ''
  body: string = ''
  newPost: any;
  
  constructor(private postService: PostService, private router: Router) { }

  addPost() {
    this.newPost = {
      title: this.title,
      body: this.body
    }
    this.postService.addPost(this.newPost).subscribe()
    this.router.navigate(['/posts'])

  }
  cancle() {
    this.router.navigate(['/posts'])
  }
}
