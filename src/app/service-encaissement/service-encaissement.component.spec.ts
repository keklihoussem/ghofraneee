import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEncaissementComponent } from './service-encaissement.component';

describe('ServiceEncaissementComponent', () => {
  let component: ServiceEncaissementComponent;
  let fixture: ComponentFixture<ServiceEncaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEncaissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEncaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
