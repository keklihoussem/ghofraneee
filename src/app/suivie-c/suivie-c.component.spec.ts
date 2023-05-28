import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieCComponent } from './suivie-c.component';

describe('SuivieCComponent', () => {
  let component: SuivieCComponent;
  let fixture: ComponentFixture<SuivieCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivieCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuivieCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
