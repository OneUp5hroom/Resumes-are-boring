import { TestBed } from '@angular/core/testing';

import { DynamoDBAPIService } from './dynamo-dbapi.service';

describe('DynamoDBAPIService', () => {
  let service: DynamoDBAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamoDBAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
