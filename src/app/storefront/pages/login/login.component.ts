import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'ecom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginPage : String = 'yes';
  constructor(private router: Router , private loginService : LoginService) { }

  ngOnInit(): void {
  }

  submitLoginForm(): void {
    this.loginService.isLoggedIn.next(true);
    this.router.navigateByUrl('/home');
  }
}
