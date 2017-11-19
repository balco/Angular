import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {DateAdapter} from '@angular/material';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  
  
  // tslint:disable-next-line:member-ordering
 // date = new FormControl(new Date());
// tslint:disable-next-line:member-ordering
  //serializedDate = new FormControl((new Date()).toISOString());

  ngOnInit() { }
}
