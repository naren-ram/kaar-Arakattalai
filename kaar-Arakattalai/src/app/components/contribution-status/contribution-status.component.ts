import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contribution-status',
  standalone: true,
  imports: [],
  template: `
    <div class="status-card">
      <h3>Contribution Status</h3>
      <p>Status: Active</p>
      <p>Annual Contribution: ₹8000</p>
    </div>
  `,
  styles: [`
    .status-card {
      border: 1px solid #ff0000;
      padding: 16px;
      border-radius: 8px;
      background-color: #f9f9f9;
      width: 260px; /* Reduced width */
      margin: 0 auto; /* Center the card */
    }
  `]
})
export class ContributionStatusComponent {
  @Input() status!: string;
  @Input() annualContribution!: number;
}
