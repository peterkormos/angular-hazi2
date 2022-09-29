import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  @Input() timezone: string | undefined;
  @Input() activeTimezoneComponent: { timezone: string | undefined } | undefined;
  @Output() currentTimezoneChange = new EventEmitter<string>();

  constructor() {
  }

  refresh() {
    //Miért frissül ilyenkor a felület, annak ellenére hogy nincs itt kód?
  }

  isCurrentTimezone() {
    return this.activeTimezoneComponent?.timezone === this.timezone;
  }

  setToCurrentTimezone() {
    this.currentTimezoneChange.emit(this.timezone);
  }

  getTimezone() {
    return this.isCurrentTimezone() ? 'Jelenlegi időzóna: ' + this.timezone : this.timezone;
  }

  getDateTime() {
    let datetime: string | undefined;
    if (this.timezone == undefined) {
      datetime = undefined;
    }
    else {
      datetime = new Date().toLocaleString("en-US", { timeZone: this.timezone });
    }

    return datetime;
  }


  ngOnInit(): void {
  }

}
