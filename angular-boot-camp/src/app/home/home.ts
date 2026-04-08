import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homeMessage = signal("Hellooooo")

  clickHandler() {
    console.log("You have clicked on me!")
  }

  keyUpHandler(event: KeyboardEvent) {
    if (event.key == "a") {
      console.log(event.key)
    }
  }
}
