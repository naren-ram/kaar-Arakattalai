import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-pi-chart',
  templateUrl: './pi-chart.component.html',
  styleUrls: ['./pi-chart.component.scss'],
})
export class PiChartComponent {
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartData = {
    labels: ['Education', 'Medical', 'CSR', 'Laptop'],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ['#F97316', '#0EA5E9', '#10B981', '#EAB308'],
        hoverOffset: 4,
        cutout: '70%'  // 👈 This goes here in Chart.js v4+
      }
    ]
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12
        }
      }
    }
  };
}
