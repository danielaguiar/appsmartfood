import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppAbstractBaseComponent } from './app-abstract-base.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp extends AppAbstractBaseComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = this.paginas.home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    super()
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Categorias', component: this.paginas.categorias },
      { title: 'Profile', component: this.paginas.profile }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
