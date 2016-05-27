export class Ng2WebpackWeatherWidgetPage {
  navigateTo() {
    return browser.get('/');
  }

  getWidgets() {
    return element.all(by.css('.weather'));
  }
}
