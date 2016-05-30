var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    browserStack: {
      username: 'epdlambda1',
      accessKey: 'jnyF69nfrgp4fKrddivT'
    },

    customLaunchers: {
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: '50.0',
        os: 'OS X',
        os_version: 'El Capitan'
      }
    },

    frameworks: ['mocha'],

    files: [
      {pattern: './karma-test-shim.js', watched: false}
    ],

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['bs_firefox_mac'],
    singleRun: true
  };

  config.set(_config);
};
