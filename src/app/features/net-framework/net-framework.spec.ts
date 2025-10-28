import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetFramework } from './net-framework';

describe('NetFramework', () => {
  let component: NetFramework;
  let fixture: ComponentFixture<NetFramework>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetFramework]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetFramework);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
