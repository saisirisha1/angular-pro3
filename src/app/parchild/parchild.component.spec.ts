import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParchildComponent } from './parchild.component';

describe('ParchildComponent', () => {
  let component: ParchildComponent;
  let fixture: ComponentFixture<ParchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
