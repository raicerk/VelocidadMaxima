import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseProvider {

	items: Observable<any[]>;

	constructor(public af: AngularFireDatabase) {
	}

	/**
	 * Save data in collection of firebase
	 * @param  {string} nameDB name of collection
	 * @param  {any}    data   data at save
	 */
	SaveFirebase(nameDB: string, data: any) {
		this.af.list(nameDB).push(data);
		//this.af.object(nameDB).set(data)
			// .then(_ => {
			// 	console.log(`save success in collection ${nameDB}`)
			// })
			// .catch(err => {
			// 	console.log(err, 'You dont have access!')
			// });
	}

}
