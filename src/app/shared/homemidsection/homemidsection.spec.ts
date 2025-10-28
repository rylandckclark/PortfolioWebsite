import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homemidsection } from './homemidsection';

describe('Homemidsection', () => {
  let component: Homemidsection;
  let fixture: ComponentFixture<Homemidsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homemidsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homemidsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
