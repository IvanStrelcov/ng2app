import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css',
    `.app { background: #d6c7c7;}`
  ],
  template: `<div class="app">
                <h1>First state</h1>
                  <div>
                    <router-outlet></router-outlet>
                  </div>
                <h2>Router outlet ^</h2>
             </div>`
})
export class App {

  constructor() {}

  ngOnInit() {}
}
