import { HomeView } from './app.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
	imports: [
		BrowserModule.withServerTransition({
			appId: 'universal-demo-app'
		}),
		RouterModule.forRoot([
			{ path: '', component: HomeView, pathMatch: 'full' },
			{ path: 'lazy', loadChildren: './lazy.module#LazyModule' }
		])
	],
	declarations: [AppComponent, HomeView],
	bootstrap: [AppComponent],
	providers: [
		{ provide: APP_BASE_HREF, useValue: '/' },
	]
})
export class AppBrowserModule { }