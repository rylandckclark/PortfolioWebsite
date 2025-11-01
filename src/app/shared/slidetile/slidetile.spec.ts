import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidetile } from './slidetile';

describe('Slidetile', () => {
  let component: Slidetile;
  let fixture: ComponentFixture<Slidetile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slidetile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slidetile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
