import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '';  // Backend URL

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.apiUrl}/api/data`);  // Adjust the API endpoint
  }
}
