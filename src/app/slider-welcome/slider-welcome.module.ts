import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderWelcomePageRoutingModule } from './slider-welcome-routing.module';

import { SliderWelcomePage } from './slider-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderWelcomePageRoutingModule
  ],
  declarations: [SliderWelcomePage]
})
export class SliderWelcomePageModule {}
