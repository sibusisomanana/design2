import { Component } from '@angular/core';
import { NewsService } from '../../app/service/news.service';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(private NewsService : NewsService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
