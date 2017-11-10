import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  items: Observable<any[]>;

  constructor(af: AngularFireDatabase) {
    this.items = af.list('/push').valueChanges();
    af.list("/datos")
    af.list("").push("");
  }

}
