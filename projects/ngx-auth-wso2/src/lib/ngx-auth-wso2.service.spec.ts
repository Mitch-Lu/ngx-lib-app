import { TestBed, inject } from '@angular/core/testing';

import { NgxAuthWso2Service } from './ngx-auth-wso2.service';

describe('NgxAuthWso2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAuthWso2Service]
    });
  });

  it('should be created', inject([NgxAuthWso2Service], (service: NgxAuthWso2Service) => {
    expect(service).toBeTruthy();
  }));
});
