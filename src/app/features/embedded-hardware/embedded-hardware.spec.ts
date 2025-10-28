import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedHardware } from './embedded-hardware';

describe('EmbeddedHardware', () => {
  let component: EmbeddedHardware;
  let fixture: ComponentFixture<EmbeddedHardware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbeddedHardware]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmbeddedHardware);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
