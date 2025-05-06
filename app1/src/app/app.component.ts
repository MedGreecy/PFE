import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';  // Import ApiService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;  // Variable to store data fetched from the backend

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Call the getData method when the component is initialized
    this.apiService.getData().subscribe(response => {
      this.data = response;  // Store the response in 'data' variable
    });
  }
}
