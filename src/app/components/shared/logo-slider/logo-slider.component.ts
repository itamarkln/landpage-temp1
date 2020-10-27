import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-logo-slider',
  templateUrl: './logo-slider.component.html',
  styleUrls: ['./logo-slider.component.scss']
})
export class LogoSliderComponent implements OnInit {
  @Input('logos') logos;
  @Input('slideTitle') slideTitle: string;
  customOptions: any = {
    loop: true,
    margin: 40,
    autoplay: true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit(): void { }
}
