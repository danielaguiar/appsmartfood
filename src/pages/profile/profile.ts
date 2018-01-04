import { ClienteDTO } from "./../../models/cliente.dto";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { StorageService } from "../../services/storage.service";
import { ClienteService } from "./../../services/domain/cliente.service";
import { API_CONFIG } from "../../config/api.config";
import { AppAbstractBaseComponent } from "../../app/app-abstract-base.component";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage extends AppAbstractBaseComponent {
  cliente: ClienteDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService
  ) {
    super();
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    console.log(localUser.email);
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe(
        response => {
          console.log(response);
          this.cliente = response;
          this.getImageIfExists();
        },
        error => {
          if (error.status == 403) {
            this.navCtrl.setRoot(this.paginas.home);
          }
        }
      );
    }
  }

  private getImageIfExists() {
    this.clienteService
      .getImageFromBucket(this.cliente.id)
      .subscribe(
        response =>
          (this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${
            this.cliente.id
          }.jpg`),
        error => {}
      );
  }
}
