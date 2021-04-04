import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavWordsService {

  constructor() { }

  addFav(obj)
  {
    let temp:any[]=[];
    if(localStorage.getItem('fav') !== null)
    {
      temp = JSON.parse(localStorage.getItem('fav'));
    }
    temp.unshift(obj);
    localStorage.setItem('fav',JSON.stringify(temp));
    console.log(localStorage.getItem('fav'));
  }

  getFavs()
  {
    return JSON.parse(localStorage.getItem('fav'));
  }

  checkIfFav(obj)
  {
    if(localStorage.getItem('fav') === null)
      return false;
    else
    {

      let temp:any = JSON.parse(localStorage.getItem('fav'));
      
      if(temp.find( el=> el.word === obj.word && el.definition === obj.definition ) === undefined)
        return false;
      else
        return true;

    }
  }

  removeFav(obj)
  {
    let temp:any = JSON.parse(localStorage.getItem('fav'));
    let index = temp.findIndex(el => el.word === obj.word);
    temp.splice(index,1);
    localStorage.setItem('fav',JSON.stringify(temp));
  }
}
