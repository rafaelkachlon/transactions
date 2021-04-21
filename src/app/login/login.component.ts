import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  LoginError: boolean;

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password)
      .pipe(first())
      .subscribe((user: UserModel) => this.router.navigate(['transactions']),
        error => this.LoginError = true);
  }
}
