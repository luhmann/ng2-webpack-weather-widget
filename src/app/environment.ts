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
