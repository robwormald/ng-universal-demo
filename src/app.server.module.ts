import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppBrowserModule } from './app.browser.module';

@NgModule({
  imports: [
	  ServerModule,
	  AppBrowserModule
  ],
  bootstrap: [
	  AppComponent
  ],
  providers: [
	//   { provide: NgModuleFactoryLoader, useClass: ServerRouterLoader }
  ]
})
export class AppServerModule {}
