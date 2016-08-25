import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserProfileService {
  constructor(private http: Http){}

  getUser(id) {
    return this.http.get(`${API_HOST}${API_PORT}/api/users/${id}`)
                    .map(user => user.json());
  }

  removeUser(id) {
    return this.http.delete(`${API_HOST}${API_PORT}/api/users/${id}`)
                    .map(res => res.json());
  }
}
