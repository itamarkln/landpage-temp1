import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-specialism',
  templateUrl: './our-specialism.component.html',
  styleUrls: ['./our-specialism.component.scss']
})
export class OurSpecialismComponent implements OnInit {
  imagesItems = [
    { src: 'assets/images/icons/member.png', alt: 'Team member', value: '10+', text: 'Team member'  },
    { src: 'assets/images/icons/clock.png', alt: 'Clock', value: '105', text: 'Sleepless hours' },
    { src: 'assets/images/icons/positive-feedback.png', alt: 'Positive feedback', value: '99%', text: 'Positive feedback' },
    { src: 'assets/images/icons/coffee.png', alt: 'Coffee', value: '700+', text: 'Cups of coffee' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
