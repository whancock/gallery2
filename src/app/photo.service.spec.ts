/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { PhotoService } from './photo.service';

describe('Photo Service', () => {
  beforeEachProviders(() => [PhotoService]);

  it('should ...',
      inject([PhotoService], (service: PhotoService) => {
    expect(service).toBeTruthy();
  }));
});
