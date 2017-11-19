import { CarDetailsComponent } from './Components/car-list/car-details/car-details.component';
import { CarListComponent } from './Components/car-list/car-list.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { BookNowComponent } from './Components/book-now/book-now.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'cars', component: CarListComponent},
    { path: 'book-now', component: BookNowComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'locations', component: LocationsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
