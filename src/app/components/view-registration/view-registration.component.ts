import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeReg;
  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params.id;
    //id is defined as in routing.module.ts i.e, path: 'admin/view/:id'

    this.getBikeReg(id); //subscribing to service
  }

  getBikeReg(id: number) {
    this.bikeService.getBike(id).subscribe(
      data => { this.bikeReg = data },
      err => { console.error(err) },
      () => { console.log('bike ' + id + 'loaded') }
    );
  }

}
