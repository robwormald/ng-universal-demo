import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModule } from './app.server'
import { AppServerModuleNgFactory } from './ngfactory/src/app.server.ngfactory'
import * as express from 'express';
import {ngExpressEngine} from './express-engine'

enableProdMode();

const app = express();


app.engine('html', ngExpressEngine({
	baseUrl: 'http://localhost:4200',
	bootstrap: [AppServerModuleNgFactory]
}));

app.set('port', process.env.PORT || 8000);
app.set('view engine', 'html');
app.set('views', 'src')

app.get('/', (req, res) => {
	res.render('index', {req});
});

app.get('/lazy', (req, res) => {
	res.render('index', {req});
});

app.listen(app.get('port'),() => {
	console.log(`${(new Date()).toLocaleTimeString()}: listening on :${app.get('port')}`);
});
