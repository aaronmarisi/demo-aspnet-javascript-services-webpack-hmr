import { Component } from '@angular/core';

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
