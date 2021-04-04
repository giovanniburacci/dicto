import { Component, OnInit } from '@angular/core';
import { FavWordsService } from '../fav-words.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favpage',
  templateUrl: './favpage.page.html',
  styleUrls: ['./favpage.page.scss'],
})
export class FavpagePage implements OnInit {

  constructor(public favs:FavWordsService,
    private modalCtrl:ModalController) { }

  myFavs:any;
  backUpFavs:any;
  searchText:string;

  ngOnInit() {
    this.loadFavs();
  }

  loadFavs()
  {
    this.backUpFavs = this.myFavs = this.favs.getFavs();
    
    console.log(this.myFavs);
  }

  hasFavs()
  {
    if(this.myFavs == null || this.myFavs == null )
      return false;
    else
      return true;
  }

  clearText()
  {
    this.searchText = "";
  }

  filterFavs()
  {
    if(this.searchText !== "" )
      this.myFavs = this.myFavs.filter( el => el.word.includes(this.searchText))
    else
      this.myFavs = this.backUpFavs;

  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }




}
