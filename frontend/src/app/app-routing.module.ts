import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: "", redirectTo: 'posts', pathMatch: "full" },
  { path: "posts",component:PostListComponent },
  { path: "posts/:id", component:PostDetailsComponent },
  { path: "add-comment/:id", component:AddCommentComponent },
  { path: "add-post", component:AddPostComponent },
  { path: "edit-post/:id", component:EditPostComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
