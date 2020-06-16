import { TestBed } from '@angular/core/testing';

import { CategoryServiceService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
