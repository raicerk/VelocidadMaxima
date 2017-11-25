import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	userProfile: any = null;

	constructor(public navCtrl: NavController, public navParams: NavParams, private facebook: Facebook, public fba: AngularFireAuth, public menu: MenuController) {
	}

	ionViewDidEnter() {
		//to disable menu, or
		this.menu.enable(false);
	}

	ionViewWillLeave() {
		// to enable menu.
		this.menu.enable(true);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	facebookLogin() {
		this.facebook.login(['email']).then((response) => {

			const facebookCredential = firebase.auth.FacebookAuthProvider
				.credential(response.authResponse.accessToken);

			firebase.auth().signInWithCredential(facebookCredential)
				.then((success) => {
					console.log("Firebase success: " + JSON.stringify(success));
					this.userProfile = success;
          this.navCtrl.setRoot(HomePage);
				})
				.catch((error) => {
					console.log("Firebase failure: " + JSON.stringify(error));
				});

		}).catch((error) => { console.log(error) });
	}

}
