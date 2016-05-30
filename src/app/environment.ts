// The file for the current environment will overwrite this one during build
// Different environments can be found in config/environment.{dev|prod}.ts
// The build system defaults to the dev environment

let env;

switch (process.env.ENV) {
  case 'prod':
  case 'production':
    env = require('../../config/environment.prod.js');
    break;
  case 'dev':
  case 'development':
  case 'test':
  case 'testing':
  default:
    env = require('../../config/environment.dev.js');
}

export const environment = env;
