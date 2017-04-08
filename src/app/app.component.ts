import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/main">main</a> |
      <a routerLink="/other">other</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
