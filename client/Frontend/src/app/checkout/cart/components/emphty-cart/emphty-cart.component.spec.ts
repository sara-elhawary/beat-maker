import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphtyCartComponent } from './emphty-cart.component';

describe('EmphtyCartComponent', () => {
  let component: EmphtyCartComponent;
  let fixture: ComponentFixture<EmphtyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmphtyCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmphtyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
