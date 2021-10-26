import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'https://data-tonic-api.herokuapp.com/api/companies';
    return this.http.get(url);
  }
}
