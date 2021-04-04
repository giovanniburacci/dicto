import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(
    private http: HttpClient
  ) { }

  url:string="https://wordsapiv1.p.rapidapi.com/"
  headers:{}=
  {
    method: "GET",
    headers:
    {
      "x-rapidapi-key": "your-api-key",
		  "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    }
  }

  getRandomWord()
  {
    return this.http.get(this.url+"words/?random=true&hasDetails=typeOf",this.headers);
  }

  getSuggestions(searchText:string)
  {
    return this.http.get(this.url+"words/?letterPattern=%5E"+searchText+"&limit=3&page=1",this.headers);
  }

  getWord(word:string)
  {
    return this.http.get(this.url+"words/"+word,this.headers)
  }
  
}
