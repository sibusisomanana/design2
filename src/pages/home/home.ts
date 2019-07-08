import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ArtistPage } from '../artist/artist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datas: any = [];
  constructor(public navCtrl: NavController) {
    for(let index = 0; index < 10; index++){
      this.datas.push(index);
    }
  }

  goToNext(){
    this.navCtrl.push(ArtistPage);
  }

}
