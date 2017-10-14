import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ErrorService {

  private errorCounter = 0;

  constructor(private http: Http) {
  }

  getErrorCounter() {
    return this.getObservable('/api/errorCounter/1');
  }

  private getObservable(url: string) {
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(error);
        }
      );
  }
}
