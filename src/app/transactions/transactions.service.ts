import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private readonly getTransactionsUrl = 'https://digital-api.cal-online.co.il/interview/api/Transactions/GetTransactions';
  private readonly saveMonthlyTransactionsUrl = 'https://digital-api.cal-online.co.il/interview/api/Transactions/SaveMonthlyTransactions';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getTransactions(): Observable<any> {
    return this.http.get(this.getTransactionsUrl, this.httpOptions).pipe(
      map(res => res),
      catchError(error => this.handleError(error))
    );
  }

  saveMonthlyTransactions(amount: number): Observable<any> {
    const body = {
      debitDate: new Date(),
      totalPayment: amount
    };
    return this.http.post(this.saveMonthlyTransactionsUrl, body, this.httpOptions).pipe(
      map(res => res),
      // catchError(error => this.handleError(error))
    );
  }

  get httpOptions(): any {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) as UserModel;

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${currentUser.token}`
      })
    };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.status === 401) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['login']);
    }
    return throwError(error.error);
  }
}
