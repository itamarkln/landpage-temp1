import { Component, OnInit } from '@angular/core';
import { ScrollToByClickService } from 'src/app/common/services/scroll-to.service';

@Component({
  selector: 'app-move-to-contact',
  templateUrl: './move-to-contact.component.html',
  styleUrls: ['./move-to-contact.component.scss']
})
export class MoveToContactComponent implements OnInit {

  constructor(private readonly scrollToByClickService: ScrollToByClickService) { }

  ngOnInit(): void {
  }


  onScrollDown(e, dest) {
    this.scrollToByClickService.triggerScrollTo(dest);
  }
}
