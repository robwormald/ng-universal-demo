import './polyfills.ts';

import { platformBrowser } from '@angular/platform-browser'
import { AppModule } from './app'
import { AppModuleNgFactory } from './ngfactory/src/app.ngfactory'

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory);
