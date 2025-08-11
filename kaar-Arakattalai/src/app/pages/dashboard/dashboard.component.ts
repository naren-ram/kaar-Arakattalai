import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { ReferralTableComponent } from '../../components/referral-table/referral-table.component';
import { SummaryConsComponent } from '../../components/summary-cons/summary-cons.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TabSwitcherComponent } from '../../components/tab-switcher';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MenubarComponent,
    SummaryConsComponent,
    ReferralTableComponent,
    UserProfileComponent,
    TabSwitcherComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchTerm: string = '';
  selectedTab: 'contribution' | 'referrals' = 'contribution';

  onTabChange(tab: 'contribution' | 'referrals') {
    this.selectedTab = tab;
  }

  onSearchChange(term: string) {
    this.searchTerm = term;
  }
}
