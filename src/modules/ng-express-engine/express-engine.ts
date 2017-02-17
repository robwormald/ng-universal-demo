//hacky express wrapper thingy.

const fs = require('fs');
const path = require('path');
import { Request } from 'express';
import { NgModuleFactory } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';

const templateCache  = {};

export function ngExpressEngine(setupOptions) {

	return function(filePath, options, callback) {
		if(!templateCache[filePath]){
			const file = fs.readFileSync(filePath);
			templateCache[filePath] = file.toString();
		}

    const document = templateCache[filePath];
    const moduleFactory = setupOptions.bootstrap[0];

    handleRequest(options.req, document, moduleFactory, callback);
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
