import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ServerComponent } from '../components/server/server.component';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  users = [];
  user = {
    pseudo: String,
    password: String,
    state: 'false'
  };
  constructor(private router: Router, public modalCtrl: ModalController) {}

  onSubmit(form: NgForm) {
    const nom = form.value['pseudo'];
    this.user.pseudo = nom;
    const passe = form.value['password'];
    this.user.password = passe;
    const souvenir = form.value['souvenir'];
    if (souvenir) {
      this.user.state = 'true';
      form.value.state = true;
    }

    const navigationExtra: NavigationExtras =
    {
      state: this.user
    };

    this.router.navigate(['/home'], navigationExtra);
    form.reset();
  }

 async openServer() {
    const modal = await this.modalCtrl.create({
      component: ServerComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
