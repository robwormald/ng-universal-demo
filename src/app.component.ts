import { NgModule, Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { APP_BASE_HREF } from '@angular/common';

@Component({
	selector: 'home-view',
	template: `<h3>Home View</h3>`
})
export class HomeView { }

@Component({
	selector: 'app',
	template: `
	  <h1>Universal Demo</h1>
	  <a routerLink="/">Home</a>
	  <a routerLink="/lazy">Lazy</a>
	  <router-outlet></router-outlet>
	`
})
export class AppComponent { }


