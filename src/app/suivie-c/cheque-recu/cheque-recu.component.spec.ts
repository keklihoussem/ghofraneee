import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeRecuComponent } from './cheque-recu.component';

describe('ChequeRecuComponent', () => {
  let component: ChequeRecuComponent;
  let fixture: ComponentFixture<ChequeRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeRecuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
