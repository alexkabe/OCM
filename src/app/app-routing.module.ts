import { HomepagePage } from './homepage/homepage.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'depot',
    loadChildren: () => import('./modules/depot-camion/depot-camion.module').then( m => m.DepotCamionPageModule)
  },
  {
    path: 'parametre',
    loadChildren: () => import('./parametre/parametre.module').then( m => m.ParametrePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
