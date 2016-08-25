import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersListService {
  constructor(private http: Http){}
  getUsers() {
    return this.http.get(`http://localhost:${API_URL}/api/users`)
                    .map(user => user.json());
  }
  getUsersByName(name) {
    return this.http.get(`http://localhost:${API_URL}api/users?name=${name}`)
                    .map(user => user.json());
  }
}
