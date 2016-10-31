import {TestComponentBuilder, async, inject} from 'angular2-testing-lite/core';
import {
  beforeEach,
  beforeEachProviders,
  describe,
  it,
  xdescribe,
  xit
} from 'angular2-testing-lite/mocha';
import {expect} from 'chai';

import {AppComponent} from './app.component';

xdescribe('Component: App', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([ TestComponentBuilder ], (tcb: TestComponentBuilder) => {
    builder = tcb.overrideProviders(AppComponent, []);
  }));

  it('can create', () => {
    builder.createAsync(AppComponent).then(fixture => {
      expect(fixture).to.exist;
    });
  });
});
