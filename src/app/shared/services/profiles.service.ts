import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProfilesService {

  private serverUrl = '/api/servers';
  private profileUrl = '/api/profile';

  constructor(private http: HttpClient) {
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
