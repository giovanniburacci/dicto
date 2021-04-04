import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./slider-welcome/slider-welcome.module').then ( m => m.SliderWelcomePageModule )
  },
  { 
    path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)  
  },
  {
    path: 'slider-welcome',
    loadChildren: () => import('./slider-welcome/slider-welcome.module').then( m => m.SliderWelcomePageModule)
  },
  {
    path: 'favpage',
    loadChildren: () => import('./favpage/favpage.module').then( m => m.FavpagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }