import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';

@Injectable()
export class DeviceProvider {

  public uuid: string;

  constructor(private device: Device) {
    this.uuid = this.device.uuid;
  }

}
