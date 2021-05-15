import { Injectable } from '@angular/core';
import {​​​​​​​​ BehaviorSubject, Observable }​​​​​​​​ from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = new BehaviorSubject<boolean>(false);
  private PRODUCT_SERVICE_BASE_URL = "/assets/template";

  constructor(private readonly httpClient : HttpClient) { }

  public getUsers(): Observable<User[]> {
    const url = `${this.PRODUCT_SERVICE_BASE_URL}/users.json`;
    return this.httpClient.get<User[]>(url);
  }
}
