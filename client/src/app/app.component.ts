
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
})
export class AppComponent implements OnInit {
  message = 'Loading...';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessage().subscribe(
      (res) => this.message = res.message,
      (err) => this.message = 'Error fetching message'
    );
  }
}
