import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'ecom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedInUser: boolean = false;

  constructor(private readonly router : Router , private loginService : LoginService) { }

  ngOnInit(){
    this.loginService.isLoggedIn.subscribe((value)=> this.isLoggedInUser = value);
  }

  logoutUser() {
    this.loginService.isLoggedIn.next(false);
    this.router.navigateByUrl('/login');
  }

}
