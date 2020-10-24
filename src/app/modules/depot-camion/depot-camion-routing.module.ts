import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepotCamionPage } from './depot-camion.page';

const routes: Routes = [
  {
    path: '',
    component: DepotCamionPage
  },
  {
    path: 'transfert',
    loadChildren: () => import('../depot_camion/transfert/transfert.module').then( m => m.TransfertPageModule)
  },
  {
    path: 'camion',
    loadChildren: () => import('../depot_camion/camion/camion.module').then( m => m.CamionPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('../depot_camion/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('../depot_camion/article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'facture',
    loadChildren: () => import('../depot_camion/facture/facture.module').then( m => m.FacturePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('../depot_camion/modal/modal.module').then( m => m.ModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotCamionPageRoutingModule {}
