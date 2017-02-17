import 'zone.js/dist/zone-node';
import 'rxjs/Rx';
import * as express from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModule } from './app/server-app.module';
import { ServerAppModuleNgFactory } from './ngfactory/src/app/server-app.module.ngfactory';
import { ngExpressEngine } from './modules/ng-express-engine/express-engine';
import { ROUTES } from './routes';
import { App } from './api/app';
import { enableProdMode } from '@angular/core';
enableProdMode();
const app = express();
const api = new App();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
	baseUrl: baseUrl,
	bootstrap: [ServerAppModuleNgFactory]
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('index', {
      req: req
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.get('/data', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.json(api.getData());
  console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(8000,() => {
	console.log(`Listening at ${baseUrl}`);
});
