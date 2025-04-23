import { Component } from '@angular/core';

@Component({
  selector: 'app-event-blind-example',
  imports: [],
  templateUrl: './event-blind-example.component.html',
  styleUrl: './event-blind-example.component.css'
})
export class EventBlindExampleComponent {
  times: number = 0;
  userInput: string = "";

  incrementTimes() {
    // this.times = this.times + 1;
    this.times++;
  }

  decrementTimes() {
    // this.times = this.times - 1;
    this.times--;
  }

  reset() {
    this.times = 0;
  }
}
