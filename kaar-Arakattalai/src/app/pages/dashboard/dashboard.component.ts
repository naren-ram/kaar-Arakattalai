import { Router } from '@angular/router'; 
import { Component } from '@angular/core';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { ReferralTableComponent } from '../../components/referral-table/referral-table.component';
import { SummaryConsComponent } from '../../components/summary-cons/summary-cons.component';

import { UserProfileComponent } from '../../components/user-profile/user-profile.component';  
@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    MenubarComponent,
    UserProfileComponent,
    SummaryConsComponent,
    ReferralTableComponent,
  
    
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  status = 'Active';
  annualContribution = 8000;
}
