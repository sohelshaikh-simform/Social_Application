import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../models/post.model'
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id: any;
  posts: any;
  userComment: any[]=[]
  allData:any
  commentPostId: string[] = [];
  constructor(private route: ActivatedRoute, private postService: PostService, private commentService: CommentService,private router:Router) { }

  ngOnInit() {
    this.getpost()
  }
  
  getpost() {
    this.id = this.route.snapshot.paramMap.get("id")!
    
    this.postService.getPost(this.id).subscribe((res) => {
      this.allData= res
      this.posts=this.allData.post
        for (let i in this.allData.comment){
              this.userComment.push(this.allData.comment[i].comment)
        }
    })
  }

  goBack(){
    this.router.navigate(['/posts'])
  }
}
