import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDraggableMultiselectComponent } from './ngx-draggable-multiselect.component';

describe('NgxDraggableMultiselectComponent', () => {
  let component: NgxDraggableMultiselectComponent;
  let fixture: ComponentFixture<NgxDraggableMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDraggableMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDraggableMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
