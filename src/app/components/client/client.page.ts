import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  client2: any = [];
  constructor(private modalCtrl: ModalController)
  {
  }

  ngOnInit() {
  }

  listeClient(choix2: number)
  {
    this.modalCtrl.dismiss(choix2);
  }

}
