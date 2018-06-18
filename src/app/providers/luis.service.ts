import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'http://localhost:3000/api';

@Injectable()
export class LuisService {

  constructor(private http: HttpClient) {}

  getLogs() {
    return this.http.get(`${api}/logs`);
  }
}
