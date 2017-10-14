import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProfilesService {

  private serverUrl = '/api/servers';
  private profileUrl = '/api/profile';

  constructor(private http: Http) {
  }

  getServerList() {
    return this.getObservable(this.serverUrl);
  }

  pushProfile(profile: { profile: string, server: string }) {
    this.http.post(this.profileUrl, profile)
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
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
