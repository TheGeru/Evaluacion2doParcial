import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1erparcialComponent } from './ejercicio1erparcial.component';

describe('Ejercicio1erparcialComponent', () => {
  let component: Ejercicio1erparcialComponent;
  let fixture: ComponentFixture<Ejercicio1erparcialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio1erparcialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio1erparcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
