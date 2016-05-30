/// <reference path="../typings/index.d.ts" />

import { expect } from '../test/helper/utils';
import { Ng2WebpackWeatherWidgetPage } from './app.po';

describe('ng2-webpack-weather-widget App', () => {
  let page: Ng2WebpackWeatherWidgetPage;

  beforeEach(() => {
    page = new Ng2WebpackWeatherWidgetPage();
  })

  it('should display weather widgets', () => {
    page.navigateTo();
    expect(page.getWidgets().count()).to.eventually.equal(5);
  });
});
