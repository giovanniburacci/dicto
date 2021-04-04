import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor() { }

  array=["ciao","cia","opolno","cimice","cazzo"];
  stringa:string="ci";
  ngOnInit() {
    this.filtraArr()
  }

  filtraArr()
  {
    let temp;
    temp = this.array.filter( el => el.startsWith(this.stringa));

    console.log(temp);
  }


}
