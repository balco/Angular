import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule,DateAdapter} from '@angular/material';
import { DatePickerComponent } from './Components/book-now/date-picker/date-picker.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule,MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { CarsService } from './Components/car-list/cars.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





import { AppComponent } from './Components/app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CarDetailsComponent } from './Components/car-list/car-details/car-details.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { BookNowComponent } from './Components/book-now/book-now.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CarListComponent } from './Components/car-list/car-list.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarDetailsComponent,
    BookNowComponent,
    AboutUsComponent,
    LocationsComponent,
    DatePickerComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // tslint:disable-next-line:no-trailing-whitespace
    MatButtonModule,  
    MatCheckboxModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    // tslint:disable-next-line:no-trailing-whitespace
    
   ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
