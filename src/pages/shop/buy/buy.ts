import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html'
})

export class BuyPage {

    item: string = this.navParams.get('item');
    
    
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.item = this.navParams.get('buyItem');
  }
    onBuyItems(){
        this.navCtrl.popToRoot();
    }
}
