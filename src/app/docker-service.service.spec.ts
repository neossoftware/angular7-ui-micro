import { TestBed } from '@angular/core/testing';

import { DockerServiceService } from './docker-service.service';

describe('DockerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DockerServiceService = TestBed.get(DockerServiceService);
    expect(service).toBeTruthy();
  });
});
