import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'ecom-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLoggedInUser: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(){
    this.loginService.isLoggedIn.subscribe((value)=> this.isLoggedInUser = value);
  }

}
