import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { HttpModule }          from '@angular/http';
import { RouterModule }        from '@angular/router';

import { App }        from './app.component';
import { HeaderComponent }     from './header/header.component';

import { UserListModule }      from './users-list';
import { UserCreateModule }    from './user-create';
import { UserProfileModule }   from './user-profile';

import { SharedModule }   from './shared/shared.module';

import { routes,
         routing,
         appRoutingProviders } from './app.routes';

@NgModule({
  imports: [      BrowserModule,
                  UserListModule,
                  HttpModule,
                  UserCreateModule,
                  UserProfileModule,
                  routing,
                  SharedModule.forRoot()],
  declarations: [ App,
                  HeaderComponent],
  providers: [ appRoutingProviders ],
  bootstrap: [ App ]
})
export class AppModule {}
