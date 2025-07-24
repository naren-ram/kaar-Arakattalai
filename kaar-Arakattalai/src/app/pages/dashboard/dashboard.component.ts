import { Component } from '@angular/core';
import { TopContributionsComponent } from '../../components/top-contributions/top-contributions.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [TopContributionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {}
