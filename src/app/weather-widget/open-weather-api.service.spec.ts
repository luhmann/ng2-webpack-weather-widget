import { expect } from 'chai';
import { MockBackend, MockConnection } from "@angular/http/testing";
import { Injectable, provide } from "@angular/core";
import { Http, BaseRequestOptions, Response, ResponseOptions } from "@angular/http";
import { inject, async, TestComponentBuilder } from "angular2-testing-lite/core";
import { describe, xdescribe, it, xit, beforeEachProviders, beforeEach } from "angular2-testing-lite/mocha";

import { OpenWeatherApi } from './open-weather-api.service';

describe('WeatherWidget: Open Weather API Service', () => {
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        return new Http(backend, options);
      }, deps: [MockBackend, BaseRequestOptions]
    }),
    OpenWeatherApi
  ]);

  it('can instantiate', inject([OpenWeatherApi], (service: OpenWeatherApi) => {
    expect(service).to.be.exist;
  }));

  xdescribe('getWeatherForCity', () => {
    beforeEach(inject([MockBackend], (backend: MockBackend) => {
      backend.connections.subscribe((c: MockConnection) => {
        c.mockRespond(
          new Response(new ResponseOptions({
            status: 200,
            body: {
              "city": "Berlin"
            }
          }))
        );
      });
    }));

    it('should return the mock data', async(inject([OpenWeatherApi],
      (service:OpenWeatherApi) => {
        service.getWeatherForCity('Berlin').toPromise()
          .then(resp => {
            expect(resp).to.exist;
          });
      }
    )));
  });
});
