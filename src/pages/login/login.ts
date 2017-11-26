import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	userProfile: any = null;

	constructor(public navCtrl: NavController, public navParams: NavParams, private facebook: Facebook, public fba: AngularFireAuth, public menu: MenuController, private storage: Storage) {
	}

  ionViewDidEnter() {
    this.storage.get('userProfile').then((val) => {
      if (val!=null) {
        console.log(val);
        this.navCtrl.setRoot(HomePage);
      }
    });
    this.menu.enable(false);
	}

	ionViewWillLeave() {
		this.menu.enable(true);
	}

	facebookLogin(){

		this.facebook.login(['email']).then((response) => {

			const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

			firebase.auth().signInWithCredential(facebookCredential)
				.then((data) => {
					this.userProfile = data;
          this.storage.set('userProfile', data);
          this.navCtrl.setRoot(HomePage);
				})
				.catch((error) => {
					console.log("Firebase failure: " + JSON.stringify(error));
				});
		}).catch((error) => {
      console.log(error)
    });
	}

}
