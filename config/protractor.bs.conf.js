exports.config = {
  allScriptsTimeout: 11000,
  specs: [ '../e2e/**/*.e2e.ts' ],
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',

  capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,

    name: 'sob-js',

    'browserstack.local': 'true',

    'browserName' : 'Chrome',
    'browser_version' : '50.0',
    'os' : 'Windows',
    'os_version' : '8.1',
    'resolution' : '1024x768'
  },
  // directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'mocha',
  mochaOpts: {
    reporter: "spec",
    slow: 3000,
    timeout: 30000
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  }
};
