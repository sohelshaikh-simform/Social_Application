import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../service/comment.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  id: any;
  post:any;
  newComment:any;
  constructor(
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
  }


  addComment(comment:string){
    this.newComment={
      comment:comment,
      postId:this.id
    }
    this.commentService.addComment(this.newComment,this.id).subscribe()
    this.newComment=''
    this.router.navigate(['/posts'])

  }
}

