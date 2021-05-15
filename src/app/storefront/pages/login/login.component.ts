import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interface/user';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'ecom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginPage : String = 'yes';
  username?: string;
  password? : string;
  users : User[] = [];
  constructor(private router: Router , private loginService : LoginService) { }

  ngOnInit(): void {
  this.loginService.getUsers().subscribe((value)=>{
    this.users = value;
  });
  }

  login(): void {
    // var addedUser = this.username;
    // var addedPassword = this.password;
    // console.log(addedUser);
    // console.log(addedPassword);
    // console.log(this.users);
    // if(this.validate(addedUser , addedPassword , this.users)){
    //   this.loginService.isLoggedIn.next(true);
    //   this.router.navigateByUrl('/home');
    // }else{
    //   alert("Invalid credentials");
    // }
    if(this.username == 'admin' && this.password == 'admin'){
      this.loginService.isLoggedIn.next(true);
      this.router.navigateByUrl('/home');
     }else {
       alert("Invalid credentials");
     }

  }

//   validate(user : string , pass : string , usersList : User[]): boolean{
//     for(var i=0; i <usersList.length; i++){
//       console.log(user);
//       console.log(pass);
//       console.log(usersList[i]);
//       if ((user === usersList[i].name) && (pass === usersList[i].password)) {
//         console.log(true);
//         return true;
//     }
//     }
//     console.log(false);
//     return false;
//   }
 }
