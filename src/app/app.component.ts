import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slideLogos = [
    { src: 'assets/images/logos/logo-ipsum1.svg', alt: 'logo-ipsum1' },
    { src: 'assets/images/logos/logo-ipsum2.svg', alt: 'logo-ipsum2' },
    { src: 'assets/images/logos/logo-ipsum3.svg', alt: 'logo-ipsum3' },
    { src: 'assets/images/logos/logo-ipsum4.svg', alt: 'logo-ipsum4' },
    { src: 'assets/images/logos/logo-ipsum5.svg', alt: 'logo-ipsum5' },
  ];
}
