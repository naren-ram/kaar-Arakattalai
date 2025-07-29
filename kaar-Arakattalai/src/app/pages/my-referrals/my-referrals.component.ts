import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-referrals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-referrals.component.html',
  styleUrls: ['./my-referrals.component.scss']
})
export class MyReferralsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize referrals data here
  }

  onNavigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
