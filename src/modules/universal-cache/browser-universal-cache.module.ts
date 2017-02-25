import { NgModule } from '@angular/core';
import { UniversalCache } from './universal-cache';

export function getUniversalCache() {
  const universalCache = new UniversalCache();
  universalCache.initialize(window['UNIVERSAL_CACHE'] || {});
  return universalCache;
}

@NgModule({
  providers: [
    UniversalCache,
    // { provide: UniversalCache, useFactory: getUniversalCache }
  ]
})
export class BrowserUniversalCacheModule {

}
