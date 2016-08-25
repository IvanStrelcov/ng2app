import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { HttpModule }          from '@angular/http';
import { RouterModule }        from '@angular/router';

import { App }        from './app.component';

import { MainModule } from './main';

import { routes,
         routing,
         appRoutingProviders } from './app.routes';

@NgModule({
  imports: [      BrowserModule,
                  MainModule,
                  HttpModule,
                  routing,
                  ],
  declarations: [ App ],
  providers: [ appRoutingProviders ],
  bootstrap: [ App ]
})
export class AppModule {}
