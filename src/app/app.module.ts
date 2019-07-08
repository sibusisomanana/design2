import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArtistPage } from '../pages/artist/artist';
import { LibraPage } from '../pages/libra/libra';
import {NewsPage}  from '../pages/news/news';
import { HttpModule } from '@angular/http';
import { NewsService } from './service/news.service';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
   
    HomePage,
    TabsPage,
    ArtistPage,
    LibraPage,
    NewsPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    ArtistPage,
    LibraPage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsService
  ]
})
export class AppModule {}
