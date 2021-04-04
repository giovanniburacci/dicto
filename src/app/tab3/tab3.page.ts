import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { FavpagePage } from '../favpage/favpage.page';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }
 
  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FavpagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
