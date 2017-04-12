import { Component } from '@angular/core';

// exported to use with webpack HMR
export const rootElementTagName = 'app-root';

@Component({
  selector: rootElementTagName,
  template: `
    <nav>
      <a routerLink="/main">main</a> |
      <a routerLink="/other">other</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
