import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GpsProvider } from '../../providers/gps/gps';
import { TransportesProvider } from '../../providers/transportes/transportes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private listaTipos: any;

  constructor(public navCtrl: NavController, public gps: GpsProvider, public transporte: TransportesProvider) {
    this.listaTipos = transporte.Listatransportes;
  }

  iniciar(){
    this.gps.startTracking();
    console.log("Iniciar");
  }

  detener(){
    this.gps.stopTracking();
    console.log("detener");
  }

}
