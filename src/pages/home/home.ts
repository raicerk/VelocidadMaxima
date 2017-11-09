import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GpsProvider } from '../../providers/gps/gps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public gps: GpsProvider) {
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
