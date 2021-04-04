import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordPagPage } from './word-pag.page';

const routes: Routes = [
  {
    path: '',
    component: WordPagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordPagPageRoutingModule {}
