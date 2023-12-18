import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LevelServiceService {

  constructor(private http : HttpClient) { }

  getLevels(): Observable<any> {
    return this.http.get(environment.apiURL+'Levels');
  }
  addLevel(formData:any):Observable<any>{
    return this.http.post(environment.apiURL+'Level' ,formData)
  }
}
