import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  itemDummyDesc: string = `Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Suspendisse varius enim in eros elementum tristique.`;
  servicesItems = [
    { icon: 'assets/images/icons/web-design-icon.png', title: 'Web design', desc: this.itemDummyDesc },
    { icon: 'assets/images/icons/development-icon.png', title: 'Development', desc: this.itemDummyDesc },
    { icon: 'assets/images/icons/ecommerce-icon.png', title: 'Ecommerce', desc: this.itemDummyDesc },
    { icon: 'assets/images/icons/responsive-icon.png', title: 'Responsive', desc: this.itemDummyDesc },
    { icon: 'assets/images/icons/branding-icon.png', title: 'Branding', desc: this.itemDummyDesc },
    { icon: 'assets/images/icons/support-icon.png', title: 'Support', desc: this.itemDummyDesc }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
