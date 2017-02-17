import 'zone.js/dist/zone-node';
import * as express from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { ServerAppModule } from './app/server-app.module';
import { ServerAppModuleNgFactory } from './ngfactory/src/app/server-app.module.ngfactory';
import { ngExpressEngine } from './modules/ng-express-engine/express-engine';
import { ROUTES } from './routes';

enableProdMode();

const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
	baseUrl: baseUrl,
	bootstrap: [ServerAppModuleNgFactory]
}));

app.set('view engine', 'html');
app.set('views', 'src');

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('index', {req});
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.listen(8000,() => {
	console.log(`Listening at ${baseUrl}`);
});
