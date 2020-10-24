import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Facture } from '../../../service/facture';
import { ArticlePage } from '../article/article.page';
import { ClientPage } from '../client/client.page';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {

  client = {
    nom: '',
    prenom: ''
  };
  articles: any = [];
  articleChoisi: any = [];
  clients: any = [];
  numtest = 0;
  numClient: number;
  numero = 0;
  numliste =  0;
  unite = 0;
  verif = false;
  select = 0;

  solde = 0;
  ttt = 0;
  total = 0;
  total2 = 0;
  psa = 0;
  tva = 0;
  numFooter: number;
  detail = 0;
  detail2 = 0;

  constructor(private modalController: ModalController,
              private alertController: AlertController,
              private navigation: NavController,
              private toastController: ToastController,
              private popover: PopoverComponent,
              private facture: Facture) { }

  ngOnInit() {
    this.articleChoisi = this.facture.articleChoisi;
    this.calcul();
  }

  refrech()
  {


  }

  async save(e)
  {
    if (this.numtest !== 0 && this.facture.articleChoisi.length !== 0)
    {
      this.popover.presentPopover(e);
    }
  }


  onDetail(f)
  {
    this.detail = f;
  }

  onDetail2(f)
  {
    this.detail2 = f;
  }

  async openClient()
  {
    if (this.numliste === 0)
    {
      const modalClient = await this.modalController.create({
        component: ClientPage,
      });
      await modalClient.present();
      const tabCli = await modalClient.onWillDismiss();
      if (tabCli.data)
      {
        this.client = tabCli.data;
        this.facture.client = this.client;
        this.numtest = 1;
      }
    }
  }

  onSelect()
  {
    this.select = 1;
  }

  async openArticle()
  {
    if (this.numtest === 0)
    {
      this.toastController.create({
        header: 'Veuillez selectionner un client au prealable',
        position: 'bottom',
        duration: 3000
      }).then(val => val.present());
    }
    else
    {
      const modalArticle = await this.modalController.create({
        component: ArticlePage,
      });
      await modalArticle.present();
    }
  }




  async onClose()
  {

    if (this.verif === true)
    {
      const alert = await this.alertController.create({
        message: 'Voulez vous quitter sans enregistrer?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            handler: () => { }
          },
          {
            text: 'Oui',
            handler: () => {
              this.navigation.navigateBack(['/depot/vente']);
              this.articleChoisi = [];
              this.numliste = 0;
              this.numClient = 0;
              this.numtest = 0;
              this.numero = 0;
              this.articleChoisi = [];
              this.ttt = 0;
              this.tva = 0;
              this.solde = 0;
              this.total = 0;
              this.psa = 0;

            }
          }
        ]
      });
      alert.present();
    }
    else
    {
      this.navigation.navigateBack(['/depot/camion']);
      this.articleChoisi = [];
      // this.db.numliste = 0;
      this.numClient = 0;
      this.numtest = 0;
      this.numero = 0;
      // this.db.articleChoisi = [];

      this.ttt = 0;
      this.tva = 0;
      this.solde = 0;
      this.total = 0;
      this.psa = 0;

    }
  }

    calcul()
    {
      if (this.articleChoisi.length !== 0)
      {
        this.total = 0;
        for (const art of this.articleChoisi)
        {
          // tslint:disable-next-line: radix
          const atx = parseInt(art.prix) * parseInt(art.quantite);
          this.total2 = this.total2 + atx;
          // tslint:disable-next-line: radix
          this.unite = this.unite + parseInt(art.quantite);
        }
        this.total = this.total + this.total2;
        this.total2 = 0;
        this.tva = (this.total * 19.25) / 100;
        const psaclient = this.clients[this.numClient].psa;
        this.psa = (this.total * psaclient) / 100;
        this.ttt = this.psa + this.tva;
        this.solde = this.total + this.ttt;

      }
      else
      {
        this.tva = 0;
        this.ttt = 0;
        this.psa = 0;
        this.solde = 0;
        this.total = 0;
      }
    }
  

    dropArticle(i)
    {
      this.confirmation(i);
    }


    async confirmation(i)
    {
      const alert = await this.alertController.create({
        message: 'Voulez vous supprimer cet article?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            handler: () => { }
          },
          {
            text: 'Oui',
            handler: () => {
              this.verif = true;
              this.articleChoisi.splice(i, 1);
              this.calcul();
            }
          },
        ]
      });
      alert.present();
    }

    dropFacture()
    {
      this.articleChoisi = [];
      this.numliste = 0;
      this.numClient = 0;
      this.numtest = 0;
      this.numero = 0;
      this.articleChoisi = [];

      this.ttt = 0;
      this.tva = 0;
      this.solde = 0;
      this.total = 0;
      this.psa = 0;
    }

}
