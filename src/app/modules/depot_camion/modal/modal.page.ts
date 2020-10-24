import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Facture } from 'src/app/service/facture';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  article =
  {
    code: '',
    libelle: '',
    quantite: 0,
    prix: 0
  };
  article2 =
  {
    code: '',
    libelle: '',
    quantite: 0,
    prix: 0
  };

  constructor(private modal: ModalController,
              private facture: Facture,
              private alertController: AlertController) { }

  ngOnInit() {
    this.article = this.facture.article;
  }

  onSubmit(f)
  {
    if (this.article.quantite < f.value.quantite)
    {
      this.alertController.create({
        header: 'Desole quantite stock inferieure',
        buttons:
        [
          {
            text: 'Ok',
            handler: () => {}
          }
        ]
      }).then(val => val.present());
    }
    else
    {
      if (this.facture.articleChoisi.length !== 0)
      {
        for (const tab of this.facture.articleChoisi)
        {
          if (tab.code === this.article.code)
          {
            tab.quantite = f.value.quantite;
          }
          else
          {
            this.article2 = this.article;
            this.article2.quantite = f.value.quantite;
            this.facture.articleChoisi.push(this.article2);
          }
        }
      }
      else
      {
        this.article2 = this.article;
        this.article2.quantite = f.value.quantite;
        this.facture.articleChoisi.push(this.article2);
      }
    }
    this.facture.calculQuantite();
    this.modal.dismiss();
  }

  dismiss()
  {
    this.modal.dismiss();
  }

}
