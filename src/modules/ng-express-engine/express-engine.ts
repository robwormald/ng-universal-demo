//hacky express wrapper thingy.

const fs = require('fs');
const path = require('path');
import { Request } from 'express';
import { NgModuleFactory, NgZone, NgModuleRef, ApplicationRef } from '@angular/core';
import { DOCUMENT, ɵgetDOM } from '@angular/platform-browser';
import { renderModuleFactory, platformServer, PlatformState, INITIAL_CONFIG } from '@angular/platform-server';
import { UniversalCache } from '../universal-cache/universal-cache';

const templateCache = {};
const getDOM = ɵgetDOM;
export function ngExpressEngine(setupOptions) {

	return function(filePath, options, callback) {
		if(!templateCache[filePath]){
			const file = fs.readFileSync(filePath);
			templateCache[filePath] = file.toString();
		}

    const document = templateCache[filePath];
    const moduleFactory = setupOptions.bootstrap[0];

    handleRequestFancy(options.req, document, moduleFactory, callback);
	}
}

const platform = platformServer();
function handleRequestFancy(req: Request, document: string, moduleFactory: NgModuleFactory<{}>, callback: (err, html) => any) {
  const platform = platformServer([
    {
      provide: INITIAL_CONFIG, useValue: {
        document: document,
        url: req.url
    }}
  ])
  platform.bootstrapModuleFactory(moduleFactory)
    .then(moduleRef => {
      const state = moduleRef.injector.get(PlatformState);
      const appRef = moduleRef.injector.get(ApplicationRef);

      appRef.isStable
        .filter((isStable: boolean) => isStable)
        .first()
        .subscribe(
          (stable) => {
            injectCache(moduleRef);

            callback(null, state.renderToString());
            platform.destroy();
          }
      )
    })
}

function injectCache(moduleRef: NgModuleRef<{}>) {
  try {
    const cache = moduleRef.injector.get(UniversalCache);
    const state = moduleRef.injector.get(PlatformState);
    const document: any = state.getDocument();
    const dom = getDOM();
    const script: HTMLScriptElement = <HTMLScriptElement> dom.createElement('script');
    const cacheString = JSON.stringify(cache.toJson());
    dom.setText(script, `window['UNIVERSAL_CACHE'] = ${cacheString}`);
    const body = dom.querySelector(document, 'body');
    dom.appendChild(body, script);
  } catch (e) {
    console.error(e);
  }
}

function handleRequest(req: Request, document: string, moduleFactory: NgModuleFactory<{}>, callback: (err, html) => any) {
  renderModuleFactory(moduleFactory, {
    document: document,
    url: req.url
  })
  .then(string => {
    callback(null, string);
  });
}
