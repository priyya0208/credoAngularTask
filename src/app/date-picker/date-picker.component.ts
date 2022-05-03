import { Component, OnInit, ViewChild } from '@angular/core';

import {NgbDateStruct, NgbCalendar, NgbDatepicker, NgbInputDatepicker, NgbDate, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  minDate = { year: 2021, month: 1, day: 1 };
  maxDate={year:2032,month: 1, day: 1}
  constructor(private calendar: NgbCalendar) {
  }

  @ViewChild('datePicker')
  datePicker!: NgbInputDatepicker;
  fromDate!: NgbDate;
  toDate!: NgbDate;
onFirstSelection = true;

selectDate(date: NgbDate) {
  if(this.onFirstSelection){
    this.fromDate = date;
    this.onFirstSelection = false;
  } else {
    this.toDate = date;
    this.onFirstSelection = true;
    this.datePicker.close();
  }
}

formatInputText(event:any ) {
  let currentSelection: NgbDate =  event.date;
  let parserFormatter: NgbDateParserFormatter = event.parser
  return `${this.fromDate ? parserFormatter.format(this.fromDate) : ''} - ${this.toDate ? parserFormatter.format(this.toDate) : ''}`;
}
  ngOnInit(): void {
  }

}
