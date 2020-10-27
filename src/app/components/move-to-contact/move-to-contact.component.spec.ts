import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveToContactComponent } from './move-to-contact.component';

describe('MoveToContactComponent', () => {
  let component: MoveToContactComponent;
  let fixture: ComponentFixture<MoveToContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveToContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveToContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
