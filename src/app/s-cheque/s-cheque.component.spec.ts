import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SChequeComponent } from './s-cheque.component';

describe('SChequeComponent', () => {
  let component: SChequeComponent;
  let fixture: ComponentFixture<SChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SChequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
