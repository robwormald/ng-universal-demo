import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent, AppModule } from './app';

@NgModule({
  imports: [
	  ServerModule,
	  AppModule
  ],
  bootstrap: [
	  AppComponent
  ],
  providers: [
	//   { provide: NgModuleFactoryLoader, useClass: ServerRouterLoader }
  ]
})
export class AppServerModule {}
