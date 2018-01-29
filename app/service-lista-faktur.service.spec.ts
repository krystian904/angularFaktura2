import { TestBed, inject } from '@angular/core/testing';

import { ServiceListaFakturService } from './service-lista-faktur.service';

describe('ServiceListaFakturService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceListaFakturService]
    });
  });

  it('should be created', inject([ServiceListaFakturService], (service: ServiceListaFakturService) => {
    expect(service).toBeTruthy();
  }));
});
