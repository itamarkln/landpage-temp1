import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ScrollToByClickService } from "../../common/services/scroll-to.service";

declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navMenu') navMenu;
  mobileIsOpen = false;

  constructor(private scrollToByClickService: ScrollToByClickService) {}

  ngOnInit(): void {
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        }
        else {
            $('nav').removeClass('black');
        }
    });
  }

  onNavClick(e) {
    this.mobileIsOpen = !this.mobileIsOpen;
  }

  onNavLinkClick(e, dest) {
    this.mobileIsOpen = !this.mobileIsOpen;
    this.scrollToByClickService.triggerScrollTo(dest);
  }
}
