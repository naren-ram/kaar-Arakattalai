import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-referrals',
  templateUrl: './my-referrals.component.html',
  styleUrls: ['./my-referrals.component.scss']
})
export class MyReferralsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize referrals data here
  }

  // Add any referrals-specific methods here
  onNavigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}