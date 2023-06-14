import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootModule } from './root/root.module';

platformBrowserDynamic().bootstrapModule(RootModule)
  .catch(err => console.error(err));


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
