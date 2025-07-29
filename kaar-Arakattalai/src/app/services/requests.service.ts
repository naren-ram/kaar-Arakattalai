import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getRequests(): Observable<any[]> {
    // MUST match the backend route
    return this.http.get<any[]>('http://localhost:3000/api/referrals');
  }
}
