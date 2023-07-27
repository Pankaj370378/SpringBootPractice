import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaarComponentComponent } from './navbaar-component.component';

describe('NavbaarComponentComponent', () => {
  let component: NavbaarComponentComponent;
  let fixture: ComponentFixture<NavbaarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbaarComponentComponent]
    });
    fixture = TestBed.createComponent(NavbaarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
