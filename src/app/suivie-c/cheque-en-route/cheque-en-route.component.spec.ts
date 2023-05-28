import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeEnRouteComponent } from './cheque-en-route.component';

describe('ChequeEnRouteComponent', () => {
  let component: ChequeEnRouteComponent;
  let fixture: ComponentFixture<ChequeEnRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeEnRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeEnRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
