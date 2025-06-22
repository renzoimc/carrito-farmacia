import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPrincipal } from './carrito-principal';

describe('CarritoPrincipal', () => {
  let component: CarritoPrincipal;
  let fixture: ComponentFixture<CarritoPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoPrincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoPrincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
