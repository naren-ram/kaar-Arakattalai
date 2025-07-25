import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contribution-status',
  standalone: true,
  imports: [],
  template: `
    <div class="status-card">
      <h3>Contribution Status</h3>
      <p>Status: {{ status }}</p>
      <p>Annual Contribution: ₹{{ annualContribution }}</p>
    </div>
  `,
  styles: [`
    .status-card {
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  `]
})
export class ContributionStatusComponent {
  @Input() status!: string;
  @Input() annualContribution!: number;
}
