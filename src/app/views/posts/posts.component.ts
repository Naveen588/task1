import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from 'src/app/providers/placeholder.service';
import { PostResponse } from 'src/app/providers/response';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  Posts:PostResponse[] = []


  constructor(private _data:PlaceholderService) { }

  ngOnInit(): void {

    this.getpostData();
  }

  

  getpostData(){
this._data.getPosts().subscribe(
  (res)=>{
    this.Posts = res;
    this.Posts.forEach((post:any) => {
    if(post.body?.length>=150){
      post.body = post.body.slice(0, 149) ;
    }
    if(post.title?.length>=150){
      post.title = post.title.slice(0, 149);
    }
    });
  })
  }
}
