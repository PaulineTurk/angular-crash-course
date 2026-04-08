import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <p>test</p>

    <router-outlet />
  `,
  styles: [`
        p {
      background-color: red
    }
    `],
})
export class App {
  protected readonly title = signal('angular-boot-camp');
}
