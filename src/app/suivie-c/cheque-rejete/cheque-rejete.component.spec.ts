import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeRejeteComponent } from './cheque-rejete.component';

describe('ChequeRejeteComponent', () => {
  let component: ChequeRejeteComponent;
  let fixture: ComponentFixture<ChequeRejeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeRejeteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeRejeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
