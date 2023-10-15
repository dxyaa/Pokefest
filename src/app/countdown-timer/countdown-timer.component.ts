import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  // Set the target date and time for the countdown (replace with your desired date)
  targetDate: Date = new Date('2023-12-31T23:59:59');

  days: string = '0';
  hours: string = '0';
  minutes: string = '0';
  seconds: string = '0';

  constructor() { }

  ngOnInit(): void {
    // Update the countdown every second
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    const currentTime: Date = new Date();
    const timeDifference: number = this.targetDate.getTime() - currentTime.getTime();

    if (timeDifference <= 0) {
      // Countdown has reached its target
      this.days = '0';
      this.hours = '0';
      this.minutes = '0';
      this.seconds = '0';
    } else {
      // Calculate days, hours, minutes, and seconds
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toString();
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)).toString();
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000).toString();
    }
  }
}