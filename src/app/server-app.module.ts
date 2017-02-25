import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerUniversalCacheModule } from '../modules/universal-cache/server-universal-cache.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    ServerModule,
    ServerUniversalCacheModule,
	  AppModule
  ],
  providers: [
	//   { provide: NgModuleFactoryLoader, useClass: ServerRouterLoader }
  ]
})
export class ServerAppModule {}
