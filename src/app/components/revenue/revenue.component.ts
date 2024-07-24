import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BoxContainerComponent } from "../box-container/box-container.component";
import { Chart, ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [BoxContainerComponent],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.scss'
})
export class RevenueComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.createBarChart();
  }

  private chart: any;

  private getDayLabels(): string[] {
    const labels: string[] = [];
    const date = new Date();
    date.setDate(1);

    for (let index = 0; index < 7; index++) {
      labels.push(date.toLocaleString('defalut', { weekday: 'long' }));
      date.setDate(date.getDate() + 1);
    }
    return labels;
  }

  private getChartData(): ChartConfiguration['data'] {
    const labels = this.getDayLabels();
    return {
      labels: labels,
      datasets: [
        {
          label: "Online Sales",
          data: [14, 12, 24, 16, 11,
            20, 10],
          backgroundColor: '#0095FF',
          borderRadius: 2,
          barPercentage: 0.6,
          categoryPercentage: 0.5,


        },
        {
          label: "Offilne Sales",
          data: [13, 10, 15, 4, 10,
            15, 29],
          backgroundColor: '#00E096',
          barPercentage: 0.6,
          borderRadius: 2,
          categoryPercentage: 0.5,

        }
      ]
    };
  }

  private getChartOptions(): ChartConfiguration['options'] {
    return {
      plugins: {
        tooltip: {
          yAlign: 'bottom',

        },
        legend: {
          align: 'center',
          position: 'bottom',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 10,
            boxHeight: 10
          }
        },
      },

      responsive: true,
      scales: {
        x: {
          ticks: {

            font: { family: 'Poppins', size: 10, style: 'normal', weight: 'normal' },
            color: '#7B91B0'
          },
          grid: {
            display: false,

          }
        },
        y: {
          ticks: {
            font: { family: 'Poppins', size: 12, style: 'normal', weight: 'normal' },
            color: '#7B91B0'
          },

          grid: {
            lineWidth: 1,
            color: '#EFF1F3',
            drawTicks: false
          },
          beginAtZero: true,
          max: 25,
        }
      },

    }
  }



  private createBarChart(): void {
    const data = this.getChartData();
    const options = this.getChartOptions();

    this.chart = new Chart("BarChart", {
      type: 'bar',
      data: data,
      options: options
    });
  }



}
