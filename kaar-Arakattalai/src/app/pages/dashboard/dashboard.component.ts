import { Component } from '@angular/core';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { PiChartComponent } from '../../components/pi-chart/pi-chart.component';
<<<<<<< HEAD
import { ContributionStatusComponent } from '../../components/contribution-status/contribution-status.component';
=======
import { AreachartComponent } from '../../components/areachart/areachart.component';

>>>>>>> 1c1f68a37894b135764bd38e755046aebdf39b10

@Component({
  selector: 'dashboard',
  standalone: true,
<<<<<<< HEAD
  imports: [
    MenubarComponent,
    PiChartComponent,
    ContributionStatusComponent
  ],
=======
  imports: [MenubarComponent, PiChartComponent, AreachartComponent],
>>>>>>> 1c1f68a37894b135764bd38e755046aebdf39b10
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  status = 'Active';
  annualContribution = 8000;
}
