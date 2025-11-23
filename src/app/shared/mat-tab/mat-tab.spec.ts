import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTab } from './mat-tab';

describe('MatTab', () => {
  let component: MatTab;
  let fixture: ComponentFixture<MatTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
