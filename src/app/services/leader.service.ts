import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService} from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
    .pipe(catchError(this.processHTTPMsgService.handleError))
    }
  

  //getLeader(id: string): Observable<Leader> {
    //return of (LEADERS.filter((leader) => (Leader.name === id))[0]).pipe(delay(2000));
  //}

  getFeaturedLeader(): Observable< Leader> {
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true').pipe(map(dishes => dishes[0]))
  .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}

