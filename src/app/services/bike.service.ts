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
    let token = localStorage.getItem('access_token');

    //proxy.conf.json: Anything that begins with /server gets proxied into spring app as
    // http://localhost:8080/api/v1/bikes
    //Json payload of list of bikes are returned as Observable
    return this.http.get('/server/api/v1/bikes',
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  getBike(id: number) {
    let token = localStorage.getItem('access_token');

    return this.http.get('/server/api/v1/bikes/' + id,
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) });
  }

  createBikeRegistration(bike) {
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }
}
