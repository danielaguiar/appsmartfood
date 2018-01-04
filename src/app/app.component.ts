import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { AppAbstractBaseComponent } from './app-abstract-base.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp extends AppAbstractBaseComponent {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{ title: string, component: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthService
  ) {
    super();
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Categorias', component: this.paginas.categorias },
      { title: 'Profile', component: this.paginas.profile },
      { title: 'Logout', component: '' }
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

  openPage(page: { title: string, component: string }) {

    switch (page.title) {
      case 'Logout':
        this.auth.logout();
        this.nav.setRoot('HomePage');
        break;

      default:
        this.nav.setRoot(page.component);
    }
  }
}
