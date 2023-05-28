import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheOComponent } from './recherche-o.component';

describe('RechercheOComponent', () => {
  let component: RechercheOComponent;
  let fixture: ComponentFixture<RechercheOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
