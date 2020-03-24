import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://www.decoraid.com/wp-content/uploads/1/blog/15_amazing_new_york_city_vacation_rentals_you_ll_never_want_to_leave/crystal-chandelier-living-room-cropped.jpeg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic getaway in Paris!',
      'https://newyse-res.cloudinary.com/image/upload/t_normal_image_fill,f_auto/v1525249355/308-1864023.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip',
      'https://absolutely.london/wp-content/uploads/2017/06/Tower_Bridge_Day.png',
      154.99
    )
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }

  getPlace(id: string) {
    return {...this.places.find(p => p.id === id )};
  }
}
