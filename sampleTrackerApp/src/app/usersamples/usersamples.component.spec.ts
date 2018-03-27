import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersamplesComponent } from './usersamples.component';

describe('UsersamplesComponent', () => {
  let component: UsersamplesComponent;
  let fixture: ComponentFixture<UsersamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
