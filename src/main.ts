require('!!style!css!stylus!./app/shared/styles/global.styl');
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
