import { Injectable } from '@angular/core';
import { Factures } from './factures';

@Injectable()
export class Facture
{

      // Donnees a envoyers a factures avec S

    client = {
        nom: '',
        prenom: ''
    };
    articleChoisi: any = [];

    factures: {
        client: {},
        articles: [];

        solde: 0;
        ttt: 0;
        total: 0;
        psa: 0;
        tva: 0;
    };


    // l'etat de la facture se materialise par les variables ci-dessous

    solde: 0;
    ttt: 0;
    total: 0;
    psa: 0;
    tva: 0;
    article =
    {
      code: '',
      libelle: '',
      quantite: 0,
      prix: 0
    };
    articles = [
         {
            code: 'DJC60C (3,944)',
            libelle: 'D\'JINO C-FRUIT ',
            quantite: 3,
            prix: 2000
          },
          {
            code: 'VIP12 (1,200)',
            libelle: 'EMBALLAGE VIDE GM',
            quantite: 27,
            prix: 2000
          },
          {
            code: 'MNY6C (4,346)',
            libelle: 'MANYANG 65 CL ',
            quantite: 0,
            prix: 2000
          }
    ];
    affichePopover = 0;

    constructor(private facturiers: Factures)
    {

    }

    calculQuantite()
    {
        for (const art of this.articles)
        {
            if (art.code === this.article.code)
            {
                art.quantite = art.quantite - this.article.quantite;
            }
        }
    }

    saveFacture()
    {
        this.factures.client = this.client;
        this.factures.articles = this.articleChoisi;

        this.factures.psa = this.psa;
        this.factures.solde = this.solde;
        this.factures.total = this.total;
        this.factures.ttt = this.ttt;
        this.factures.tva = this.tva;
    }

    addFacture()
    {
        this.factures.client = this.client;
        this.factures.articles = this.articleChoisi;

        this.factures.psa = this.psa;
        this.factures.solde = this.solde;
        this.factures.total = this.total;
        this.factures.ttt = this.ttt;
        this.factures.tva = this.tva;

        this.facturiers.factures.push(this.factures);
    }
}
