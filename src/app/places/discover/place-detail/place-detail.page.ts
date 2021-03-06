import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCrtl: NavController, private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  onBookPlace() {
    //this.router.navigateByUrl('/places/tabs/discover');
    //this.navCrtl.navigateBack('/places/tabs/discover');
    this.modalCrtl.create({component: CreateBookingComponent}).then(modalEl => {modalEl.present();});
  }
}
