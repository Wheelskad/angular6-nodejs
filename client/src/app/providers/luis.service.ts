import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const api = environment.apiUrl;

@Injectable()
export class LuisService {

  constructor(private http: HttpClient) {}

  getLogs() {
    return this.http.get(`${api}/logs`);
  }
}
