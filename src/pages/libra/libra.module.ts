import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibraPage } from './libra';

@NgModule({
  declarations: [
    LibraPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraPage),
  ],
})
export class LibraPageModule {}
