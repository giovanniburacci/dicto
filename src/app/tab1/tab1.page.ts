import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';
import { RecentsearchesService } from '../recentsearches.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(
    public http:AjaxService,
    public searches:RecentsearchesService,
    public toastController: ToastController
  ) { }
  searchText:string="";
  showSuggestions:boolean=false;
  suggestions:any;
  ngOnInit() {
    
  }

  async presentToast(word:string) {
    const toast = await this.toastController.create({
      message: word + " has been added to favourites",
      duration: 2000
    });
    toast.present();
  }

  clearText()
  {
    this.searchText = "";
    this.showSuggestions = false;
  }
  
  toggleSuggestions()
  {
    this.showSuggestions = this.searchText === "" ? false : true;
    if(this.searchText!== "")
      this.http.getSuggestions(this.searchText).subscribe( resp => {
        this.suggestions = resp["results"]["data"];
        console.log(resp, "questa è risposta");
        console.log(this.suggestions, "questa è suggestions");
      })
    
  }


}
