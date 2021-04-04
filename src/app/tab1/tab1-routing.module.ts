import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordCompComponent } from '../word-comp/word-comp.component';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
