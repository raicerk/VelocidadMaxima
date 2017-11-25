import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GpsProvider } from '../../providers/gps/gps';
import { TransportesProvider } from '../../providers/transportes/transportes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tipoTransporte: number;
  patenteTransporte: string;

  constructor(public navCtrl: NavController, public gps: GpsProvider, public transporte: TransportesProvider) {
  }

  iniciar(){
    this.gps.startTracking(parseInt(this.tipoTransporte.toString()), this.patenteTransporte);
    console.log("Iniciar");
  }

  detener(){
    this.gps.stopTracking();
    console.log("detener");
  }

}
