import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { AjaxService } from '../ajax.service';
import { RecentsearchesService } from '../recentsearches.service';

@Component({
  selector: 'app-word-pag',
  templateUrl: './word-pag.page.html',
  styleUrls: ['./word-pag.page.scss'],
})
export class WordPagPage implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private http:AjaxService,
    private recent:RecentsearchesService
  ) { }

  word:string;
  obj:any;
  ngOnInit() {
    this.getWord();
  }

  getWord()
  {
    this.route.params.subscribe( resp => {
      this.word=resp.word;
      this.getInfo(this.word)
    })
  }

  getInfo(word:string)
  {
    this.http.getWord(word).subscribe( resp =>{
      this.obj = resp["results"];
      console.log(this.obj);
      this.saveWord()
    })
  }

  saveWord()
  {
    const subObj = this.obj[0];
    const objToAdd = {
      word:this.word,
      ...subObj
    }
    this.recent.addRecent(objToAdd)
  }
}
