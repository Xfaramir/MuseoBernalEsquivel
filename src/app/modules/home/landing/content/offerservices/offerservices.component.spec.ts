import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferservicesComponent } from './offerservices.component';

describe('OfferservicesComponent', () => {
  let component: OfferservicesComponent;
  let fixture: ComponentFixture<OfferservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
