import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'about',
  styles: [`
    .main {
      background: green;
    }
  `],
  template: `
    <div class="main">
      <h1>Main</h1>
      <div>
        <router-outlet name="one">first router-outlet</router-outlet>
        <router-outlet name="two">second router-outlet</router-outlet>
      </div>
      <h2>View ^</h2>
      <a [routerLink]="['/']">стейт 1</a>
      <a [routerLink]="['/another']">стейт 2</a>
    </div>
  `
})

export class Main {
  activeChildRoute: boolean;
  constructor() {}
  ngOnInit() {}
}
