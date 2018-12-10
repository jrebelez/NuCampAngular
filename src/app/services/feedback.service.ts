import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    console.log('hit')
    return this.http.post<Feedback>(baseURL + 'feedback', feedback)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
