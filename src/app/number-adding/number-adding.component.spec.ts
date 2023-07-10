import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAddingComponent } from './number-adding.component';

describe('NumberAddingComponent', () => {
  let component: NumberAddingComponent;
  let fixture: ComponentFixture<NumberAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
