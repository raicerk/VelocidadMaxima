import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TransportesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportesProvider {

  public Listatransportes: any;

  constructor(public http: Http) {
    console.log('Hello TransportesProvider Provider');
    this.Listatransportes = ["Bus interurbano","Micro interurbana", "Colectivo", "Taxi", "Transantiago", "Transantiago oruga", "Metro"]
  }
}
