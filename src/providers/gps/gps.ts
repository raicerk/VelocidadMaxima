import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/operator/map';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse
} from '@ionic-native/background-geolocation';


@Injectable()
export class GpsProvider {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;
  public speed: number = 0 ;


  constructor(private backgroundGeolocation: BackgroundGeolocation, public zone: NgZone, public geolocation: Geolocation) {
    console.log('Hello GpsProvider Provider');
  }

  startTracking() {

    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 1,
      distanceFilter: 1,
      debug: true,
      interval: 1000
    };



    this.backgroundGeolocation.configure(config).subscribe((location) => {

      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
        this.speed = location.speed;
      });

    }, (err) => {
      console.log(err);
    });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();



    // Foreground Tracking
    let options = {
      frequency: 1000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

      console.log(position);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.speed = position.coords.speed;
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
