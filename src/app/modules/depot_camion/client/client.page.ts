import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  select = 0;
  clients =
  [
    {
      nom: 'Alex',
      prenom: 'Kabe',
      psa: 5
    },
    {
      nom: 'Tamko',
      prenom: 'Arthur',
      psa: 2.5
    }
  ];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  return(client)
  {
    if (this.select === 0)
    {
        this.modalCtrl.dismiss(client);
    }
  }
}
