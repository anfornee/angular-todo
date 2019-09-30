import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedTaskComponent } from './viewed-task.component';

describe('ViewedTaskComponent', () => {
  let component: ViewedTaskComponent;
  let fixture: ComponentFixture<ViewedTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewedTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
