
import {CommonModule} from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './HomePages.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./HomePages.css']
})

export class HomePage {


constructor() {
  setInterval(() => {
    console.log("x");
    this.conterSignal.update((v) => v + 1);
  }, 1000
);
}

  counter = 0;
  conterSignal = signal(0);
  
  changeValue(value: number) {
    this.counter += value;
    this.conterSignal.update((current) => current + value);
  }
   resetValue(value: number) {
    this.counter = value;
    this.conterSignal.set(value);
  }
}