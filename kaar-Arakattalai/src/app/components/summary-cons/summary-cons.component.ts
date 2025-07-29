import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-summary-cons',
  imports: [CommonModule],
  template: `
    <div class="summary-container">
      <div
        class="summary-box"
        *ngFor="let item of statusSummary"
        [ngStyle]="getStyle(item.status)"
      >
        <div class="label">{{ item.label }}</div>
        <div class="count">{{ item.count }}</div>
      </div>
    </div>
  `,
  styles: [`
    .summary-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .summary-box {
      flex: 1 1 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.6rem 1rem;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      border: 2px solid transparent;
    }

    .label {
      flex: 1;
    }

    .count {
      font-weight: bold;
      padding-left: 1rem;
    }
  `]
})
export class SummaryConsComponent {
  statusSummary = [
    { status: 'all', label: 'All', count: 5186 },
    { status: 'approved', label: 'Approved', count: 5186 },
    { status: 'inprogress', label: 'InProgress', count: 24 },
    { status: 'rejected', label: 'Rejected', count: 5186 },
  ];

  getStyle(status: string): { [key: string]: string } {
    const styles: { [key: string]: { [key: string]: string } } = {
      all: {
        borderColor: '#e03b58',
        color: '#e03b58'
      },
      approved: {
        borderColor: '#4caf50',
        color: '#4caf50'
      },
      inprogress: {
        borderColor: '#ff9800',
        color: '#ff9800'
      },
      rejected: {
        borderColor: '#f44336',
        color: '#f44336'
      }
    };
    return styles[status.toLowerCase()] || {};
  }
}
