import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Facture } from 'src/app/service/facture';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  select = 0;
  articles = [
    {
      code: 'DJC60C (3,944)',
      libelle: 'D\'JINO C-FRUIT ',
      quantite: '3',
      prix: 2000
    },
    {
      code: 'VIP12 (1,200)',
      libelle: 'EMBALLAGE VIDE GM',
      quantite: '27',
      prix: 2000
    },
    {
      code: 'MNY6C (4,346)',
      libelle: 'MANYANG 65 CL ',
      quantite: '0',
      prix: 2000
    }
  ];
  constructor(private modalCtrl: ModalController,
              private facture: Facture)
  {
  }

  ngOnInit() {
  }

  async  retourner(article)
  {
    if (this.select === 0)
    {
      this.facture.article = article;
      const modalClient = await this.modalCtrl.create({
        component: ModalPage,
        cssClass: 'modal'
      });
      await modalClient.present();
    }
  }

  dismiss()
  {
    this.modalCtrl.dismiss();
  }
}
