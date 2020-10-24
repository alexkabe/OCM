import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalComponent } from '../popover2/modal/modal.component';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-popover2',
  templateUrl: './popover2.component.html',
  styleUrls: ['./popover2.component.scss'],
})
export class Popover2Component implements OnInit {

  numliste = 0;
  serialDefault: any;

  facture =
    {
        client: {
                code: '',
                nom:  '',
                prenom: '',
                psa: 0
        },
        article: [],
        total: 0,
        solde: 0,
        psa: 0,
        tva: 0,
        ttt: 0
    };
  totalcolis = 1;
  totalcasier = 0;
  embplein = 0;
  embvide = 0;
  psa = 2;

  letterObj = {
    from: 'Simon',
    to: 'Paul',
    text: 'Bonjour Bobo',
    operateur: 'Administrateur',
    preselleur: 'BERYNYUY PAUL',
    client: 'HAGAK WOUWE BORICE LEBON',
    NC: 'P0W3V4NKKJ44I23',
    code: 'KNL0012'
  };
  pdfObj = null;

  articles = [
    {code: '', produit: '', quantite: '', prix: '', total: ''}
  ];

  produit = [
    { produit: 'Barbe a papa', quantite: 3, pu: 100, total: 300 },
    { produit: 'Banane', quantite: 4, pu: 200, total: 800 },
    { produit: 'Papaye', quantite: 5, pu: 400, total: 2000 },
    { produit: 'Ananas', quantite: 6, pu: 300, total: 1800 }
  ];

  emballage = [
    { emballage: 'Consignation', quantite: 3, pu: 100, total: 300 },
    { emballage: 'Deconsignation', quantite: 4, pu: 200, total: 800 }
  ];

  constructor(private popoverController: PopoverController,
              private storage: Storage,
              private modal: ModalController)
  {
    this.storage.get('Bluetooth').then(val =>
      {
        this.serialDefault = val;
      });
    // this.db.factChange.subscribe(val => {
      // this.facture = val;
    // });
  }

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: Popover2Component,
      event: ev
    });
    return await popover.present();
  }


  addFacture()
  {
    // this.db.numliste = 1;
    // this.db.addFacture();
    // this.popoverController.dismiss();
    // this.db.articleChoisi = [];

  }

  dropFact()
  {
    // this.db.dropFactend();
    this.popoverController.dismiss();
  }


  async openModal()
  {
    const modalArticle = await this.modal.create({
      component: ModalComponent,
      cssClass: 'modal'
    });
    await modalArticle.present();
    this.popoverController.dismiss();
  }

}
