import { ProdutoDTO } from './../../models/produto.dto';
import { StorageService } from './../storage.service';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';

import { API_CONFIG } from '../../config/api.config';
import { CidadeDTO } from './../../models/cidade.dto';
import { Cart } from "../../models/cart";


@Injectable()
export class CartService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    createOrClearCart(): Cart {
        let cart: Cart = { items: [] };
        this.storage.setCart(cart);
        return cart;
    }

    getCart(): Cart {
        let cart: Cart = this.storage.getCart();
        if (cart == null) {
            cart = this.createOrClearCart();
        }
        return cart;
    }

    addProduto(produto: ProdutoDTO): Cart{
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id==produto.id);
        if (position==-1){
            cart.items.push({quantidade:1, produto: produto});
        }
        this.storage.setCart(cart);
        return cart;
    }
}
