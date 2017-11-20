import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Device } from '@ionic-native/device';

/*
  Generated class for the DeviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceProvider {

  constructor(private device: Device) {
    console.log('Hello DeviceProvider Provider');
  }

  uuid(){
    return this.device.uuid;
  }

}
