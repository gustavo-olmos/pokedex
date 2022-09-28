import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Service Training</h1>
  <div class="app_container">
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poke-pj';
}
