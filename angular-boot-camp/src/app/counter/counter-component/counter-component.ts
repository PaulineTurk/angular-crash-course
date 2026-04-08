import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.scss',
})
export class CounterComponent {
  counter = signal(0)

  handlerCounterClick() {
    this.counter.update(value => value + 1)

  }

}
