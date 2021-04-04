import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-welcome',
  templateUrl: './slider-welcome.page.html',
  styleUrls: ['./slider-welcome.page.scss'],
})
export class SliderWelcomePage implements OnInit {

  constructor() { }
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  ngOnInit() {
  }

}
