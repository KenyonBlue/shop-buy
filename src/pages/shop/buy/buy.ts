import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html'
})

export class BuyPage {

    
    item: string;
    
    
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.item = this.navParams.get('buyItem');
  }
    onBuyItems(){
        this.navCtrl.popToRoot();
    }
}
