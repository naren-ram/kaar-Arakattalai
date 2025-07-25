import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-pi-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chart-container">
      <h4 class="chart-title">Referral Status</h4>
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styleUrls: ['./pi-chart.component.scss']
})
export class PiChartComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Approved', 'Rejected', 'In Process'],
          datasets: [{
            data: [24, 0, 62],
            backgroundColor: ['#A3E635', '#FCA5A5', '#FB923C'],
            hoverBackgroundColor: ['#84cc16', '#f87171', '#f97316'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 8,          // Reduced from 12 to 8 for smaller circles
                boxHeight: 8,         // Set height to match width for smaller circles
                usePointStyle: true,
                padding: 15           // Reduced padding for tighter spacing
              },
              onClick: () => {} // Disable legend click functionality
            }
          },
          layout: {
            padding: {
              bottom: 20 // Increased from 30 to 50 to move legend lower
            }
          }
        }
      });
    }
  }
}


