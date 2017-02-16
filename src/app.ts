import { NgModule, Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

@Component({
	selector: 'home-view',
	template: `
	  <h3>Home View</h3>
	`
})
export class HomeView {}


@Component({
	selector: 'demo-app',
	template: `
	  <h1>Universal Demo</h1>
	  <router-outlet></router-outlet>
	`
})
export class AppComponent {
	constructor(){}
}


@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', component: HomeView, pathMatch: 'full'},
			{ path: 'lazy', loadChildren: './lazy.module#LazyModule'}
		])
	],
	declarations: [ AppComponent, HomeView ],
	bootstrap: [ AppComponent ]
})
export class AppModule {

}
