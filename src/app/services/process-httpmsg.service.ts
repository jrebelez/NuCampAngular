import { Injectable } from '@angular/core';
import { throwError} from 'rxjs';
import { HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }
  public handleError(error: HttpErrorResponse | any ){
    let errMsg: string;
    if (error.error instanceof ErrorEvent ){
      let errMsg: string;
    } else {
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }
    return throwError(errMsg);
  }
}
