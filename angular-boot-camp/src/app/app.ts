import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
    <app-header/>
    <app-home/>

    <router-outlet />
  `,
  styles: [`
        p {
      background-color: red
    }
    `],
})
export class App {

}
