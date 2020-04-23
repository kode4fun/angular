import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes() {
    //proxy.conf.json: Anything that begins with /server gets proxied into spring app as
    // http://localhost:8080/api/v1/bikes
    //Json payload of list of bikes are returned as Observable
    return this.http.get('/server/api/v1/bikes');
  }

  getBike(id: number) {
    return this.http.get('/server/api/v1/bikes/' + id);
  }

  createBikeRegistration(bike) {
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }
}
