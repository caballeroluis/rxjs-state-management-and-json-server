import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { User } from '@shared/models';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private http: HttpClient,
  ) { }

  register(user: User): Observable<any> {
    return this.http.post(
      environment.apiUrl + '/api/users',
      user
    );
  }

  login(user: User): Observable<any> {
    return this.http.post(
      environment.apiUrl + '/api/session/login',
      user
    );
  }

  updateUserProfile(user: User): Observable<any> {
    return this.http.patch(
      environment.apiUrl + '/api/users/' + user._id,
      user
    );
  }

  changePassword(user: User): Observable<any> {
    return this.http.patch(
      environment.apiUrl + '/api/users/' + user._id,
      user
    );
  }

  changeEmail(user: User): Observable<any> {
    return this.http.patch(
      environment.apiUrl + '/api/users/' + user._id,
      user
    );
  }

}
