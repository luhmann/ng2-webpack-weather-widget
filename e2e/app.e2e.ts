import { Ng2WebpackWeatherWidgetPage } from './app.po';

describe('ng2-webpack-weather-widget App', function() {
  let page: Ng2WebpackWeatherWidgetPage;

  beforeEach(() => {
    page = new Ng2WebpackWeatherWidgetPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-webpack-weather-widget works!');
  });
});
