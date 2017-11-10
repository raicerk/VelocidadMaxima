import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GpsProvider } from '../providers/gps/gps';
import { DbProvider } from '../providers/db/db';

import {BackgroundGeolocation,BackgroundGeolocationConfig,BackgroundGeolocationResponse} from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';




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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    Geolocation,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GpsProvider,
    DbProvider
  ]
})
export class AppModule {}
