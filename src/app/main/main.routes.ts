import { provideRouter, RouterConfig, RouterModule, Routes } from '@angular/router';

import { About } from '../about';
import { NoContent } from '../no-content';
import { Main } from './main.component';
// import { DataResolver } from './app.resolver';

export const mainroutes: Routes = [
  { path: 'main', children:[
    // { path: '', redirectTo: 'about' },
    { path: '', component: About },
    { path: 'another', component: NoContent }
  ]}
];

// export const mainRoutingProviders: any[] = [];

export const mainRouting = RouterModule.forChild(mainroutes);
