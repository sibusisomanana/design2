import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../Library/contact';
import { HomePage } from '../home/home';
import { LibraPage } from '../libra/libra';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = LibraPage

  constructor() {

  }
}
