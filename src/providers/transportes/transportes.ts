import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the TransportesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportesProvider {

  public Listatransportes: any;

  constructor() {
    console.log('Hello TransportesProvider Provider');
    this.Listatransportes = [
      {
        id: 1,
        tipo:"Bus interurbano"
      },{
        id: 2,
        tipo: "Micro interurbana"
      },{
        id: 3,
        tipo : "Colectivo"
      },{
        id: 4,
        tipo: "Taxi"
      },{
        id: 5,
        tipo: "Transantiago"
      },{
        id: 6,
        tipo: "Transantiago oruga"
      },{
        id: 7,
        tipo:"Metro" 
      }]
  }
}
