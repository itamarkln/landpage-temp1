import { Component, OnInit } from '@angular/core';
import { ScrollToByClickService } from 'src/app/common/services/scroll-to.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scrollToByClickService: ScrollToByClickService) { }

  ngOnInit(): void {
  }

  onScrollDown(e, dest) {
    this.scrollToByClickService.triggerScrollTo(dest);
  }

}
