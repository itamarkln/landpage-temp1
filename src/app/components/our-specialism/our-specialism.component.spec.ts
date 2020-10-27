import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecialismComponent } from './our-specialism.component';

describe('OurSpecialismComponent', () => {
  let component: OurSpecialismComponent;
  let fixture: ComponentFixture<OurSpecialismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurSpecialismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSpecialismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
