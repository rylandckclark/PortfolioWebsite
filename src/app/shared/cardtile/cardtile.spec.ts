import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardtile } from './cardtile';

describe('Cardtile', () => {
  let component: Cardtile;
  let fixture: ComponentFixture<Cardtile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardtile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardtile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
