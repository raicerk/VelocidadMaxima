import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/operator/map';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import {
	BackgroundGeolocation,
	BackgroundGeolocationConfig,
	BackgroundGeolocationResponse
} from '@ionic-native/background-geolocation';
import { DbProvider } from '../db/db'
import { DeviceProvider } from '../device/device'

@Injectable()
export class GpsProvider {

	public watch: any;
	public lat: number = 0;
	public lng: number = 0;
	public speed: number = 0;
	public date: any;
	private correccion: number = 3.7;

	constructor(private backgroundGeolocation: BackgroundGeolocation, public zone: NgZone, public geolocation: Geolocation, public fb: DbProvider, public dv: DeviceProvider) {
		console.log('Hello GpsProvider Provider');
	}

	startTracking(tipoTransporte: number, patenteTransporte: string) {

		let config = {
			desiredAccuracy: 0,
			stationaryRadius: 1,
			distanceFilter: 1,
			debug: false,
			interval: 500
		};

		this.backgroundGeolocation.configure(config).subscribe((location) => {

			this.zone.run(() => {
				this.fb.SaveFirebase({
					lat: location.latitude,
					lng: location.longitude,
					speed: (location.speed * this.correccion),
					device: this.dv.uuid(),
					date:location.timestamp,
					typeTransport: tipoTransporte,
					idTransport: patenteTransporte,
					country: 'Chile'
				});
				this.lat = location.latitude;
				this.lng = location.longitude;
				this.speed = (location.speed * this.correccion);
			});

		}, (err) => {
			console.log(err);
		});

		// Turn ON the background-geolocation system.
		this.backgroundGeolocation.start();

		// Foreground Tracking
		let options = {
			frequency: 500,
			enableHighAccuracy: true,
			debug: false
		};

		this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

			// Run update inside of Angular's zone
			this.zone.run(() => {
				this.fb.SaveFirebase({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					speed: (position.coords.speed * this.correccion),
					device: this.dv.uuid(),
					date: position.timestamp,
					typeTransport: tipoTransporte,
					idTransport: patenteTransporte,
					country: 'Chile'
				});
				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;
				this.speed = (position.coords.speed * this.correccion);
			});

		});
	}

	stopTracking() {
		console.log('stopTracking');
		this.lat = 0;
		this.lng = 0;
		this.speed = 0;
		this.backgroundGeolocation.finish();
		this.watch.unsubscribe();
	}
}
