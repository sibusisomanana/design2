import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistPage } from './artist';
import { NewsService } from '../../app/service/news.service';

@NgModule({
  declarations: [
    ArtistPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistPage),
  ],
})
export class ArtistPageModule {}
