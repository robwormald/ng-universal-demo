import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserUniversalCacheModule } from '../modules/universal-cache/browser-universal-cache.module';

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
    BrowserModule,
    BrowserUniversalCacheModule,
    AppModule
	]
})
export class BrowserAppModule {}
