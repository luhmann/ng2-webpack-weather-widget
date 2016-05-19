export class Ng2WebpackWeatherWidgetPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-webpack-weather-widget-app h1')).getText();
  }
}
