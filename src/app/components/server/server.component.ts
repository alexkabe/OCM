import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage }from '@ionic/storage';
 @Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
 parametre : any;
  constructor(public modalCtrl: ModalController,
              private storage: Storage) { }

  ngOnInit() {
    this.storage.get('parametre').then(param => {
      alert(param);
      if(param){
        this.parametre = param;
      }
    });
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }
  changeServer(){
    
  }
}
