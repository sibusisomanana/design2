

import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import {environment} from '../../app/environment';
import 'rxjs/add/operator/map';
const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;


@Injectable()
export class NewsService {
 
newsItem : any;
data = "https://newsapi.org/v2/top-headlines?country=za&category=business&apiKey=ef081ebd06ed4dcab1ec355e7d275507"
   constructor(private http: Http){
    
   }
 getNews(){
  const news = this.http.get(this.data).map(res => res.json());
  return news
 }
}