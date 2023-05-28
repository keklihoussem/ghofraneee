import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinJComponent } from './fin-j.component';

describe('FinJComponent', () => {
  let component: FinJComponent;
  let fixture: ComponentFixture<FinJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
