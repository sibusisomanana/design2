import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../app/service/news.service';

@IonicPage()
@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html',
})
export class ArtistPage {
  news:any;
  articles: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public newsService: NewsService) {
  }
  ngOnInit(){
    // console.log(this.newsService.getNews());
    
 const data = this.newsService.getNews().subscribe(res =>
  {console.log(res);
  this.news = res;
  }
  )
  }
  itemSelected(news){
    this.newsService.newsItem = news;

 this.navCtrl.push(ArtistPage);
 
  }
 
}
