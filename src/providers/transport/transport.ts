import { Injectable } from '@angular/core';

@Injectable()
export class TransportProvider {

	public listTransports: any;

	constructor() {
		this.listTransports = [
			{
				id: 1,
				type: "Bus interurbano"
			}, {
				id: 2,
				type: "Micro interurbana"
			}, {
				id: 3,
				type: "Colectivo"
			}, {
				id: 4,
				type: "Taxi"
			}, {
				id: 5,
				type: "Transantiago"
			}, {
				id: 6,
				type: "Transantiago oruga"
			}, {
				id: 7,
				type: "Metro"
			}]
	}

}
