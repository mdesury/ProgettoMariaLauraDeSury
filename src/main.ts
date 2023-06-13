import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './root/root.component'

bootstrapApplication(RootComponent);


/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);*/
