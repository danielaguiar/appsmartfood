import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';
import { AppAbstractBaseComponent } from '../../app/app-abstract-base.component';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage extends AppAbstractBaseComponent {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriaService) {
      super();
  }

  ionViewDidLoad() {
    this.categoriaService.findAll().subscribe(response => this.items = response,error => {});
  }

  showProdutos(categoria_id : string) {
    this.navCtrl.push(this.paginas.produtos, {categoria_id: categoria_id});    
  }
}
