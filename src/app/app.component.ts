import { Component, OnInit } from '@angular/core'
import { UniversalCache } from '../modules/universal-cache/universal-cache';

@Component({
	selector: 'demo-app',
	template: `
	  <h1>Universal Demo</h1>
	  <a routerLink="/">Home</a>
	  <a routerLink="/lazy">Lazy</a>
	  <router-outlet></router-outlet>
	`
})
export class AppComponent implements OnInit {
  constructor(private cache: UniversalCache) {}
  ngOnInit() {
    this.cache.set('cached', true);
  }
}
