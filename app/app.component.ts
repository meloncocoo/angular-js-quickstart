import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // styleUrls: ['app.component.css'],
  styleUrls: ['/app.component.css'],
  template: `
    <app-title [subtitle]="subtitle"></app-title>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  subtitle = '(v1)';
}
