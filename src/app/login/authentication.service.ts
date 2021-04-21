import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly loginUrl = 'https://digital-api.cal-online.co.il/interview/api/Authenticate';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string): Observable<UserModel> {
    return this.http.post(this.loginUrl, {username, password})
      .pipe(
        map((user: UserModel) => {
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          return user;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);

  }
}
