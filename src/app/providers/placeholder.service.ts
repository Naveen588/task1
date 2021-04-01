import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse } from './response';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private Uri:string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private _http:HttpClient) { }

  getPosts():Observable<PostResponse[]>{
    return this._http.get<PostResponse[]>(this.Uri)
    }

}
