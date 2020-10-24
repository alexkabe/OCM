import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastExample } from './parametre/toast/toast.component';
import { Popover2Component } from './components/popover2/popover2.component';
import { PopoverComponent } from './modules/depot_camion/facture/popover/popover.component';
import { Facture } from './service/facture';
import { Factures } from './service/factures';

@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: '__ocmbd',
      driverOrder: ['sqlite', 'indexeddb', 'websql']
    })
  ],
  providers: [
    StatusBar,
    Popover2Component,
    ToastExample,
    Facture,
    Factures,
    PopoverComponent,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
