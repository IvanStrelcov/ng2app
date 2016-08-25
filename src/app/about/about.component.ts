import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'about',
  styles: [`
  `],
  template: `
    <h1>About</h1>
  `
})
export class About {
  constructor() {}

  ngOnInit() {}

  asyncDataWithWebpack() {}

}
