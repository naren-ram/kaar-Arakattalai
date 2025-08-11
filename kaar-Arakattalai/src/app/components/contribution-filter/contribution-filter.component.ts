import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contribution-filter',
  imports: [CommonModule],
  templateUrl: './contribution-filter.component.html',
  styleUrls: ['./contribution-filter.component.scss']
})
export class ContributionFilterComponent {
  years = ['FY 25', 'FY 26', 'FY 27', 'FY 28'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  types = ['Bank Transfer', 'Salary'];

  selectedYear: string | null = null;
  selectedMonth: string | null = null;
  selectedType: string | null = null;

  @Output() filterChange = new EventEmitter<{ year: string | null; month: string | null; type: string | null }>();

  emitChange() {
    this.filterChange.emit({ year: this.selectedYear, month: this.selectedMonth, type: this.selectedType });
  }
}
