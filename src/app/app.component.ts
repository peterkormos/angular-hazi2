import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2. heti házi';

  readonly timezone1 = "America/New_York";
  readonly timezone2 = "Europe/Budapest";

  readonly activeTimezoneComponent: {timezone: string | undefined} = {timezone: undefined};

  currentTimezoneChanged(timezone: string) {
    this.activeTimezoneComponent.timezone  = timezone;
  }
}
