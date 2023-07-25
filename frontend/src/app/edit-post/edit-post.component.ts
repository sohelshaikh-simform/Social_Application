import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  id:any;
  post:any={
    title:'',
    body:''
  };
  constructor(private router: Router,private route:ActivatedRoute,private postService:PostService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id")
  }
  update(){
    this.postService.updatePost(this.id,this.post).subscribe()
    this.router.navigate(['/posts'])
  }
}
