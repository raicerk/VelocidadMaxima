import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GpsProvider } from '../../providers/gps/gps';
import { TransportProvider } from '../../providers/transport/transport';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tipoTransporte: number;
  patenteTransporte: string;

  constructor(public navCtrl: NavController, public gps: GpsProvider, public transport: TransportProvider) {
  }

  iniciar(){
    this.gps.typeTransport = parseInt(this.tipoTransporte.toString());
    this.gps.idTransport = this.patenteTransporte;
    this.gps.start();
    console.log("Iniciar");
  }

  detener(){
    this.gps.stop();
    console.log("detener");
  }

}
