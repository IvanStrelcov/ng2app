import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './header';
import { UsersListComponent } from './users-list';

@Component({
  selector: 'app',
  template: require('./app.html')
})

export class App implements OnInit {
  constructor(){}
  ngOnInit(){}
}
