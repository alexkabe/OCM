import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController, NavParams } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Facture } from '../../../../service/facture';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit{

  constructor(private popoverController: PopoverController,
              private navigate: Router,
              public navController: NavController,
              private facture: Facture) {

               }

  ngOnInit() {}
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev
    });
    return await popover.present();
  }

  addFacture()
  {
    this.facture.saveFacture();
    this.facture.affichePopover = 1;
    this.popoverController.dismiss();
  }
}
