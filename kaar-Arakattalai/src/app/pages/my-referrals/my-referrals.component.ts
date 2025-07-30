import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// ✅ Component Imports
import { ReferralTableComponent } from '../../components/referral-table/referral-table.component';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { SummaryConsComponent } from '../../components/summary-cons/summary-cons.component';

@Component({
  selector: 'app-my-referrals',
  standalone: true,
  imports: [
    MenubarComponent,
    SummaryConsComponent,
    ReferralTableComponent
  ],
  templateUrl: './my-referrals.component.html',
  styleUrls: ['./my-referrals.component.scss']
})
export class MyReferralsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 🚀 Ready for future use: data fetching, auth check, etc.
  }

  onNavigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
