import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferralTableComponent } from '../../components/referral-table/referral-table.component';
import  { MenubarComponent } from '../../components/menubar/menubar.component';
@Component({
  selector: 'app-my-referrals',
  standalone: true,
  imports: [MenubarComponent,ReferralTableComponent],
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