import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinJServiceComponent } from './fin-j-service.component';

describe('FinJServiceComponent', () => {
  let component: FinJServiceComponent;
  let fixture: ComponentFixture<FinJServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinJServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinJServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
