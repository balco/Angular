import { Car } from './../../cars/cars.model';

export class CarsService {
    private cars: Car[] = [
        // tslint:disable-next-line:max-line-length
        new Car('TOYOTA AYGO', ' DOORS: 4, PASSENGERS: 4, TRANSMISSION: MANUAL, Price: $40', 'https://d1ek71enupal89.cloudfront.net/images/blocks_png/TOYOTA/AYGO/3DR/15ToyAygPla3drWhiFL1_800.jpg'),
        new Car('BMW 3-SERIES', ' DOORS: 4, PASSENGERS: 5, TRANSMISSION: MANUAL, Price: $115', 'https://images.edealer.ca/2/39480030.jpeg'),
        // tslint:disable-next-line:max-line-length
        new Car('VOLVO V60', ' DOORS: 5, PASSENGERS: 5, TRANSMISSION: AUTOMATIC, Price: $75', 'http://st.motortrend.com/uploads/sites/10/2015/11/2016-volvo-v60-cc-wagon-angular-front.png?interpolation=lanczos-none&fit=around|660:439'),
        new Car('VOLKSWAGEN AMAROK', ' DOORS: 2, PASSENGERS: 2, TRANSMISSION: MANUAL, Price: $60', 'https://www.volkswagen.com.au/content/dam/vw-ngw/vw_pkw/importers/au/showrooms/amarok-4cyl/16x9/Amarok_ExploreTheRange_CoreEditionDualCab4x4.jpg/jcr:content/renditions/original.transform/min/img.jpg'),
       ];


       // tslint:disable-next-line:one-line
       getCars(){
        return this.cars;
      }
}
