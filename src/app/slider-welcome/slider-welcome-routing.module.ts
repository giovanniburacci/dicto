import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderWelcomePage } from './slider-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: SliderWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderWelcomePageRoutingModule {}
