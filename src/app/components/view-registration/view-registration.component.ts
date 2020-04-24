import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikeReg;
  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //Snapshot method dont work when navigating to the same URL. (URL updates but view dont update.)
    //When navigate back to the same component, angular reuses previously rendered component and dont update view. 
    //let id = parseInt(this._route.snapshot.paramMap.get('id'))

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      //id is defined as in routing.module.ts i.e, path: 'admin/view/:id'
      this.getBikeReg(id); //subscribing to service
    });
  }

  getBikeReg(id: number) {
    this.bikeService.getBike(id).subscribe(
      data => { this.bikeReg = data },
      err => { console.error(err) },
      () => { console.log('bike ' + id + 'loaded') }
    );
  }

  goBackToAdmin() {
    this.router.navigate(['../../'], { relativeTo: this.route });
    // ../ go back one step in url
  }

}
