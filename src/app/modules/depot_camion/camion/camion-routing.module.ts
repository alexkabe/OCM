import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamionPage } from './camion.page';

const routes: Routes = [
  {
    path: '',
    component: CamionPage
  },
  {
    path: 'client',
    loadChildren: () => import('../client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('../article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'facture',
    loadChildren: () => import('../facture/facture.module').then( m => m.FacturePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamionPageRoutingModule {}
