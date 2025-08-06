import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-profile',
  imports: [CommonModule],
  template: `
    <div class="profile-card">
      <img src="assets/profile_picture.png" alt="Profile Picture" class="profile-img" />
      <div class="info">
        <div class="row">
          <div>
            <div class="label">Name</div>
            <div class="value">Vineeth Rajendran</div>
          </div>
          <div>
            <div class="label">AID</div>
            <div class="value">50</div>
          </div>
        </div>

        <div class="row">
          <div>
            <div class="label">Designation</div>
            <div class="value">Professional</div>
          </div>
          <div>
            <div class="label">Direct Manager</div>
            <div class="value">Srinivasan Subbiah</div>
          </div>
        </div>

        <div class="row">
          <div>
            <div class="label">Annual Contribution (For Current FY)</div>
            <div class="value">100000</div>
          </div>
          <div>
            <div class="label">Annual Eligible Referral Amount</div>
            <div class="value">200000</div>
          </div>
        </div>

        <div class="row">
          <div>
            <div class="label">Balance Eligible Referral Amount</div>
            <div class="value">20000</div>
          </div>
          <div>
            <div class="label">My Referrals</div>
            <div class="value">0</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-card {
      max-width: 500px;
      margin: auto;
      padding: 24px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      text-align: center;
      font-family: 'DM Sans', sans-serif;
    }

    .profile-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 16px;
      border: 4px solid #f1f1f1;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .label {
      font-size: 12px;
      color: gray;
    }

    .value {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }

    @media (max-width: 480px) {
      .row {
        flex-direction: column;
        text-align: left;
      }
    }
  `]
})
export class UserProfileComponent { }
