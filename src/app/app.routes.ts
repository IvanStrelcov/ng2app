import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { provideRouter, RouterConfig, RouterModule, Routes } from '@angular/router';
import { Main } from './main';
// import { mainRouting } from './main/main.routes';

export const routes: Routes = [
  { path: '',      redirectTo: 'main', pathMatch: 'full' },
  { path: 'main',  component: Main },
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
