import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    //component calls the service
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => { this.bikes = data }, //when data returns 
      err => { console.error(err) }, //if there is any error
      () => { console.log('bikes loaded') } //no error: log to console about success
    );
  }
}
