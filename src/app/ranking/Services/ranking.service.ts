import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http : HttpClient) { }

  getRankingsBycompCode(competitionCode:string|null):Observable<any>{
    return this.http.get(environment.apiURL+'FindByCompetitionCode?competitionCode='+competitionCode);
  }
  getTop3(competitionCode:string|null):Observable<any>{
    return this.http.get(environment.apiURL+'Podium?competitionCode='+competitionCode);
  }
  
  getMemberHunt(competitionCode:string ,memberNum :number){
    return this.http.get(environment.apiURL+'MemberHunt?competitionCode='+competitionCode+'&memberNum='+memberNum);
  }
}
