import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3. heti házi';

  readonly activeTimezoneComponent: {timezone: string | undefined} = {timezone: undefined};
  timezones : string[] | undefined;

  currentTimezoneChanged(event : {timezone: string | undefined, idx:number}) {
    this.activeTimezoneComponent.timezone  = event.timezone;
    this.timezones![event.idx] = event.timezone!;
  }

  get timezoneAddEnabled() {
    return this.timezones?.length === 5 ? false : true;
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
