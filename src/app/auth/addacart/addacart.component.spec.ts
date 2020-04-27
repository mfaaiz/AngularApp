import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacartComponent } from './addacart.component';

describe('AddacartComponent', () => {
  let component: AddacartComponent;
  let fixture: ComponentFixture<AddacartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddacartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddacartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
