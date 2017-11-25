import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { GpsProvider } from '../providers/gps/gps';
import { DeviceProvider } from '../providers/device/device';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { TransportProvider } from '../providers/transport/transport';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Device } from '@ionic-native/device';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Facebook } from '@ionic-native/facebook'

export const firebaseConfig = {
	apiKey: 'AIzaSyDi1hsVHsuOqHZp4KtcjQx95H9XgeSke2c',
	authDomain: 'velocidad-730a2.firebaseapp.com',
	databaseURL: 'https://velocidad-730a2.firebaseio.com',
	storageBucket: 'velocidad-730a2.appspot.com',
	messagingSenderId: '394694744180'
};

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		HomePage,
		ListPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		HomePage,
		ListPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		GpsProvider,
		DeviceProvider,
		FirebaseProvider,
		TransportProvider,
		Geolocation,
		BackgroundGeolocation,
		Device,
		AngularFireDatabase,
		Facebook
	]
})
export class AppModule { }
