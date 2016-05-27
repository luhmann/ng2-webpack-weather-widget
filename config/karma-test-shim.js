Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');

const testingLibCore = require("angular2-testing-lite/core");
const ng2PlatformBrowserDynamic = require("@angular/platform-browser-dynamic");
const ng2PlatformBrowser = require('@angular/platform-browser/testing/browser_static')

var appContext = require.context('../src', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

// var testing = require('@angular/core/testing');
// var browser = require('@angular/platform-browser-dynamic/testing');
//
// testing.setBaseTestProviders(
//   browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
//   browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
// );


testingLibCore.resetBaseTestProviders();
testingLibCore.setBaseTestProviders(
  ng2PlatformBrowser.TEST_BROWSER_STATIC_PLATFORM_PROVIDERS,
  [
    ng2PlatformBrowserDynamic.BROWSER_APP_DYNAMIC_PROVIDERS,
    ng2PlatformBrowser.ADDITIONAL_TEST_BROWSER_PROVIDERS
  ]
);
