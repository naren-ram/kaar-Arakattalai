import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-referrals',
  standalone: true,
  imports: [CommonModule],
=======
import { ReferralTableComponent } from '../../components/referral-table/referral-table.component';
import  { MenubarComponent } from '../../components/menubar/menubar.component';
@Component({
  selector: 'app-my-referrals',
  standalone: true,
  imports: [MenubarComponent,ReferralTableComponent],
>>>>>>> dcd1f9ae03a6747e44ff99a02ab49038715c0aea
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
