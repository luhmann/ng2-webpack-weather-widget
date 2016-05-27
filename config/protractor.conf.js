exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'mocha',
  mochaOpts: {
    reporter: "spec",
    slow: 3000
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  }
};
