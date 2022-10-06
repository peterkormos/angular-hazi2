import { EventEmitter, Output, Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  @Input() timezone: string | undefined;
  @Input() activeTimezone : string | undefined;
  @Output() activeTimezoneChange = new EventEmitter<{timezone: string, idx:number}>();
  @Input() idx : number = 0;

  constructor() {
  }

  refresh() {
    //Miért frissül ilyenkor a felület, annak ellenére hogy nincs itt kód?
  }

  get isCurrentTimezone() {
    return this.activeTimezone === this.timezone;
  }
  setCurrentTimezone(timezone: string) {
    this.emitEvent();
  }

  setToActiveTimezone() {
    this.emitEvent();
  }

  private emitEvent() {
    this.activeTimezoneChange.emit({timezone : this.timezone!, idx: this.idx});
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
