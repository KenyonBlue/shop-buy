import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuyPage } from './buy/buy'


@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController) {}
    
    onGoToBuy(item: string){
        this.navCtrl.push(BuyPage, {buyItem: item });
    }
}
