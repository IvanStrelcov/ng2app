import 'bootstrap/less/bootstrap.less';
import 'animate.css/animate.css';
import './assets/css/style.css';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PLATFORM_PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS, decorateComponentRef } from './platform/environment';

import { App, APP_PROVIDERS } from './app';

import { RouterModule } from '@angular/router';

import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export function main(initialHmrState?: any): Promise<any> {

  return platformBrowserDynamic().bootstrapModule(AppModule, [
    ...PLATFORM_PROVIDERS,
    ...ENV_PROVIDERS,
    ...APP_PROVIDERS,
    RouterModule
  ])
  .then(decorateComponentRef)
  .catch(err => console.error(err));
}

if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
