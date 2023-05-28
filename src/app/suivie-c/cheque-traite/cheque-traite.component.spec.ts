import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeTraiteComponent } from './cheque-traite.component';

describe('ChequeTraiteComponent', () => {
  let component: ChequeTraiteComponent;
  let fixture: ComponentFixture<ChequeTraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeTraiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeTraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
