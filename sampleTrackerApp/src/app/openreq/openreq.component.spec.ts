import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenreqComponent } from './openreq.component';

describe('OpenreqComponent', () => {
  let component: OpenreqComponent;
  let fixture: ComponentFixture<OpenreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
