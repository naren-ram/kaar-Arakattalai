import { Component } from '@angular/core';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import {PiChartComponent} from '../../components/pi-chart/pi-chart.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [MenubarComponent, PiChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] 
})
export class DashboardComponent {

}
