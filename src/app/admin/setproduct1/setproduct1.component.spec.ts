import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Setproduct1Component } from './setproduct1.component';

describe('Setproduct1Component', () => {
  let component: Setproduct1Component;
  let fixture: ComponentFixture<Setproduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Setproduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Setproduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
