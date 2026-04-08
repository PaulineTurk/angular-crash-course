import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class CounterComponent {
  counter = signal(0)

  handlerCounterClick() {
    this.counter.update(value => value + 1)
  }
}
