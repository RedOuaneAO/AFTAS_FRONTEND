import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FishServiceService {

  constructor(private http : HttpClient) { }

  getFishs(): Observable<any> {
    return this.http.get(environment.apiURL+'Fishs');
  }
  addFish(formData:any): Observable<any> {
    return this.http.post(environment.apiURL+'Fish' ,formData);
  }
}
