import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { CounterComponent } from '../counter/counter-component/counter-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting, CounterComponent],
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
