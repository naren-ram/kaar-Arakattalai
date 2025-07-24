import { Component } from '@angular/core';
<<<<<<< HEAD
import { MenubarComponent } from '../../components/menubar/menubar.component';
import {PiChartComponent} from '../../components/pi-chart/pi-chart.component';
=======
import { TopContributionsComponent } from '../../components/top-contributions/top-contributions.component';
>>>>>>> dd315d1644757767ffe72546cc355e01b0657883

@Component({
  selector: 'dashboard',
  standalone: true,
<<<<<<< HEAD
  imports: [MenubarComponent, PiChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] 
=======
  imports: [TopContributionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
>>>>>>> dd315d1644757767ffe72546cc355e01b0657883
})
export class DashboardComponent {}
