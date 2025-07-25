import { Component } from '@angular/core';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { PiChartComponent } from '../../components/pi-chart/pi-chart.component';
import { ContributionStatusComponent } from '../../components/contribution-status/contribution-status.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    MenubarComponent,
    PiChartComponent,
    ContributionStatusComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  status = 'Active';
  annualContribution = 8000;
}
