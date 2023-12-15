import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompetitionServiceService {

  constructor(private http : HttpClient) { }

  getCompetitions(): Observable<any> {
    return this.http.get(environment.apiURL+'Competitions');
  }
}
