
import { Car } from '../../cars/cars.model';
import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[];
  constructor( private carService: CarsService) {
   }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

}
