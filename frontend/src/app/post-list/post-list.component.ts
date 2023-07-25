import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import {Post} from '../models/post.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:any[]=[]
  constructor(private postService: PostService,private router:Router) { }
  ngOnInit():void{
    this.getPosts()
  }
  getPosts() {    
    this.postService.getPosts().subscribe((posts) => {
      this.posts=posts
    })
  }
  updatePost(id:number){
    this.router.navigate(['/edit-post',id])
  }
  deletePost(id:number){
    this.postService.deletePost(id).subscribe(()=>{
      // this.posts=this.posts.filter((post)=>post.id!=id)
      this.getPosts()
    })
  }
  addComment(id:number){
    this.router.navigate(['/add-comment',id])
  }
  addPost(){
    this.router.navigate(['/add-post'])
  }
}
