import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { AjaxService } from '../ajax.service';
import { FavWordsService } from '../fav-words.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word-comp',
  templateUrl: './word-comp.component.html',
  styleUrls: ['./word-comp.component.scss'],
})
export class WordCompComponent implements OnInit, DoCheck {

  @Input() random:boolean;
  @Input() name:string;
  @Input() infoObj:any;
  word:string;
  isPage:boolean;
  partOfSpeech:string;
  definition:string;
  icon:string="heart-outline"
  constructor(
    private http: AjaxService,
    private favs: FavWordsService,
    private router:Router
  ) { }

  ngOnInit() {
    if(this.random === true)
      this.getRandomWord();
    else
      this.loadInfos();

    this.loadSettings();
  
  }

  ngDoCheck()
  {
    this.loadIcon();
  }

  loadSettings()
  {
    this.isPage = this.router.url.includes("word") ? true : false;
  }
  loadInfos()
  {
    this.word=this.name;
    this.partOfSpeech = this.infoObj["partOfSpeech"];
    this.definition = this.infoObj["definition"]
    this.loadIcon();


  }


  getRandomWord()
  {
    this.http.getRandomWord().subscribe( resp => {
      this.word=resp["word"];
      this.partOfSpeech = resp["results"]["0"]["partOfSpeech"];
      this.definition = resp["results"]["0"]["definition"];
      this.loadIcon();

    })
  }


  toggleFav()
  {
    this.icon = this.icon === "heart-outline" ? "heart" : "heart-outline";
    if(this.icon === "heart-outline")
    {
      this.favs.removeFav({
        word: this.word,
        ...this.infoObj
      });
    }
    else
    {
      console.log(
        {
          word: this.word,
          partOfSpeech : this.partOfSpeech,
          definition: this.definition
        }
      )

      this.favs.addFav({
        word: this.word,
        partOfSpeech : this.partOfSpeech,
        definition: this.definition
      });
    }
  }

  loadIcon()
  {

    if(this.favs.checkIfFav({
      word: this.word,
      partOfSpeech : this.partOfSpeech,
      definition: this.definition
    }))
      this.icon="heart"
    else
      this.icon ="heart-outline"
  }

}
