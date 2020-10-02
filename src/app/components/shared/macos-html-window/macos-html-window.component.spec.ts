import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacosHtmlWindowComponent } from './macos-html-window.component';

describe('MacosHtmlWindowComponent', () => {
  let component: MacosHtmlWindowComponent;
  let fixture: ComponentFixture<MacosHtmlWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacosHtmlWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacosHtmlWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
