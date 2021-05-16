import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interface/user';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'ecom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isInvalidLogin: boolean = false;
  username?: string;
  password?: string;
  users: User[] = [];
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getUsers().subscribe((value) => {
      this.users = value;
    });
  }

  login(): void {
    var addedUser = this.username;
    var addedPassword = this.password;
    if (this.validate(addedUser, addedPassword, this.users)) {
      this.loginService.isLoggedIn.next(true);
      this.router.navigateByUrl('/home');
    } else {
      this.isInvalidLogin = true;
    }
  }

  /**
   * Validates login component
   * @param user
   * @param pass
   * @param usersList
   * @returns true if validate
   */
  validate(user: any, pass: any, usersList: User[]): boolean {
    for (var i = 0; i < usersList.length; i++) {
      if (user === usersList[i].name && pass === usersList[i].password) {
        return true;
      }
    }
    return false;
  }
}
