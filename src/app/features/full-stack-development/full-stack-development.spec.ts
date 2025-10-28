import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackDevelopment } from './full-stack-development';

describe('FullStackDevelopment', () => {
  let component: FullStackDevelopment;
  let fixture: ComponentFixture<FullStackDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullStackDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStackDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
