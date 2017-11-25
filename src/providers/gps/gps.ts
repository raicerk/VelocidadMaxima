import { Injectable, NgZone } from '@angular/core';
import { FirebaseProvider } from '../firebase/firebase';
import { DeviceProvider } from '../device/device';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

@Injectable()
export class GpsProvider {

	public watch: any;
	public lat: number = 0;
	public lng: number = 0;
	public speed: number = 0;
	public date: any;
	private converter: number = 3.7;
	public typeTransport: number;
	public idTransport: string;

	constructor(private geolocation: Geolocation, public zone: NgZone, private firebase: FirebaseProvider, private device: DeviceProvider, private backgroundGeolocation: BackgroundGeolocation) {
	}

	/**
	 * start Geolocation and save data in firebase
	 */
	start(){
		this.geoLocationStart();
		this.backgroundLocationStart();
	}

	/**
	 * Start geolocation
	 */
	geoLocationStart() {

		let options = {
			timeout: 500
		};

		this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

			this.zone.run(() => {

				this.firebase.SaveFirebase('/Velocidad', {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					speed: position.coords.speed * this.converter,
					device: this.device.uuid,
					date: position.timestamp,
					typeTransport: this.typeTransport,
					idTransport: this.idTransport,
					country: 'Chile'
				});

				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;
				this.speed = position.coords.speed * this.converter;

			});
		});
	}

	/**
	 * Start background geolocation
	 */
	backgroundLocationStart(){

		let config = {
			desiredAccuracy: 0,
			stationaryRadius: 1,
			distanceFilter: 1,
			debug: false,
			interval: 500
		};

		this.backgroundGeolocation.configure(config).subscribe((location) => {

			this.zone.run(() => {
				this.firebase.SaveFirebase('/Velocidad',{
					lat: location.latitude,
					lng: location.longitude,
					speed: (location.speed * this.converter),
					device: this.device.uuid,
					date: location.timestamp,
					typeTransport: this.typeTransport,
					idTransport: this.idTransport,
					country: 'Chile'
				});
				this.lat = location.latitude;
				this.lng = location.longitude;
				this.speed = location.speed * this.converter;
			});

		}, (err) => {
			console.log(err);
		});

		this.backgroundGeolocation.start();

	}

	/**
	 * Stop geolocation
	 */
	stop() {
		console.log('stopTracking');
		this.lat = 0;
		this.lng = 0;
		this.speed = 0;
		this.backgroundGeolocation.finish();
		this.watch.unsubscribe();
	}
}
