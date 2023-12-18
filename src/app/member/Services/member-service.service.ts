import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {

  constructor(private http : HttpClient) { }

  getMembers(): Observable<any> {
    return this.http.get(environment.apiURL+'Members');
  }
  
  addMember(formData:any):Observable<any>{
    return this.http.post(environment.apiURL+'Member' , formData);
  }
}
