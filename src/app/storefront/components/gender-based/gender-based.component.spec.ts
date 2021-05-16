import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderBasedComponent } from './gender-based.component';

describe('GenderBasedComponent', () => {
  let component: GenderBasedComponent;
  let fixture: ComponentFixture<GenderBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
