import { expect } from 'chai';
import { inject, async, TestComponentBuilder } from "angular2-testing-lite/core";
import { describe, xdescribe, it, xit, beforeEachProviders, beforeEach } from "angular2-testing-lite/mocha";

import {AppComponent} from './app.component';

xdescribe('Component: App', () => {
  let builder:TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
       builder = tcb.overrideProviders(AppComponent, []);
  }));

  it('can create', () => {
    builder
      .createAsync(AppComponent)
      .then(fixture => {
        expect(fixture).to.exist;
      });
  });
});
