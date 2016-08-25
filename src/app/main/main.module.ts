import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { Main }  from './main.component';
import { About } from '../about';
import { NoContent } from '../no-content';

import { mainRouting } from './main.routes';

@NgModule({
  imports: [ BrowserModule, RouterModule, mainRouting ],
  declarations: [ Main, About, NoContent ],
  providers: [],
  exports: [ Main ]
})

export class MainModule {}
