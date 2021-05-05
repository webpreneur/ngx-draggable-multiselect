import { TestBed } from '@angular/core/testing';

import { NgxDraggableMultiselectService } from './ngx-draggable-multiselect.service';

describe('NgxDraggableMultiselectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDraggableMultiselectService = TestBed.get(NgxDraggableMultiselectService);
    expect(service).toBeTruthy();
  });
});
