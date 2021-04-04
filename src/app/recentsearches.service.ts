import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'
@Injectable({
  providedIn: 'root'
})
export class RecentsearchesService {

  constructor(
    private storage: Storage
  ) {}

  arr:[]=[];
  /*add(search:any){
    let temp:any;
    this.storage.get('recent').then( loaded =>{
      temp = loaded;
      temp.unshift(search)
      if(temp.length === 6)
       temp.pop();
      this.storage.set('recent',temp) 
      this.arr=temp;   
      console.log(this.arr);
    })
  }*/

  getRecents()
  { 
     return JSON.parse(localStorage.getItem('recent'));
    
  }

  hasRecents()
  {
    if(localStorage.getItem('recent') == undefined || localStorage.getItem('recent') == null)
      return false;
    else 
      return true;
  }
  addRecent(word:any)
  {
    let temp:any[]=[];

    if(localStorage.getItem('recent') == undefined)
    {
      temp.unshift(word);
      localStorage.setItem('recent',JSON.stringify(temp));
    }
    else
    {
      temp = JSON.parse(localStorage.getItem('recent'));
      temp.unshift(word);
      if(temp.length === 6)
        temp.pop();
      localStorage.setItem('recent',JSON.stringify(temp))
    }
  }

}
