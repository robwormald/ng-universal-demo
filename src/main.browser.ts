import { platformBrowser } from '@angular/platform-browser';
import { BrowserAppModule } from './app/browser-app.module';
import { BrowserAppModuleNgFactory } from './ngfactory/src/app/browser-app.module.ngfactory';

platformBrowser()
  .bootstrapModuleFactory(BrowserAppModuleNgFactory);
