import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class LocalApiService {
  constructor(private http: HttpClient) {}

  addToFav(user: User) {
    return this.http.post(environment.localApi + '/add', user);
  }
  getFavs() {
    return this.http.get<User[]>(environment.localApi);
  }
}
