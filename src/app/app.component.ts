import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3. heti házi';

  activeTimezone : string | undefined;
  timezones : string[] | undefined;

  activeTimezoneChanged(event : {timezone: string, idx:number}) {
    this.activeTimezone = event.timezone;
    this.timezones![event.idx] = event.timezone;
  }

  get timezoneAddEnabled() {
    return this.timezones?.length !== 5;
  }

  addTimezone() {
    if(this.timezones === undefined) {
      this.timezones = new Array(1).fill('');
    }
    else {
      this.timezones.push('');
    }
  }
}
