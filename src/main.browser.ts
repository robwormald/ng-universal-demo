import './polyfills.ts';

import { platformBrowser } from '@angular/platform-browser'
import { AppBrowserModule } from './app.browser.module'
import { AppBrowserModuleNgFactory } from './ngfactory/src/app.browser.module.ngfactory'

platformBrowser()
  .bootstrapModuleFactory(AppBrowserModuleNgFactory);
