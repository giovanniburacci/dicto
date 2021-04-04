import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import {WordCompComponent} from '../word-comp/word-comp.component'
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule
  ],
  exports: [
    WordCompComponent
  ],
  declarations: [Tab1Page,WordCompComponent]
})
export class Tab1PageModule {}
