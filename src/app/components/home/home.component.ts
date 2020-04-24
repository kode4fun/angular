import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home', //<app-home> will be auto replace the <router-outlet> in app.component.html when called from AppRoutingModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   models: string[] = [
     'Globo MTB 29 Full Suspension',
     'Globo Carbon Finer Race Series',
     'Globo Time Trail Blade'
   ];
  bikeform: FormGroup;
  validMessage: String = "";

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl(),
    });
  }

  submitRegistration() {
    if (this.bikeform.valid) {
      this.validMessage = "Your bike registration has been submitted. Thank you";
      //bikeform.value will contain all control values. 
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data => {
          //reset the formdata on success
          this.bikeform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    }
    else {
      this.validMessage = "Please fill out the form before submitting";
    } 
  }
}
