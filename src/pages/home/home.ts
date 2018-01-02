import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AppAbstractBaseComponent } from '../../app/app-abstract-base.component';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends AppAbstractBaseComponent {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    super();
  }

  login(){
    this.navCtrl.setRoot(this.paginas.categorias);
  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }
}
