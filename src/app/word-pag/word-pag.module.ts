import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordPagPageRoutingModule } from './word-pag-routing.module';
import {Tab1PageModule} from '../tab1/tab1.module'
import { WordPagPage } from './word-pag.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordPagPageRoutingModule,
    Tab1PageModule
  ],
  declarations: [WordPagPage]
})
export class WordPagPageModule {}
