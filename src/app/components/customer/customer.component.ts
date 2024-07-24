import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BoxContainerComponent } from "../box-container/box-container.component";
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [BoxContainerComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.createCustomerLineChart();
  }

  private chart: any;

  private getMonthLabels(): string[] {
    const labels: string[] = [];
    const date = new Date();
    date.setMonth(0);

    for (let index = 0; index < 12; index++) {
      labels.push(date.toLocaleString('defalut', { month: 'short' }));
      date.setMonth(date.getMonth() + 1);
    }
    return labels;
  }

  private getChartData(): ChartConfiguration['data'] {
    const labels = this.getMonthLabels();
    return {
      labels: labels,
      datasets: [
        {
          label: "Last Month",
          data: [250, 200, 150, 100, 150, 200, 250, 300, 350, 300, 250, 200],
          backgroundColor: 'rgba(0, 157, 255, 0.3173)',
          borderColor: '#0095FF',
          pointHoverRadius: 5,
          pointHitRadius: 10,
          pointBackgroundColor: '#0095FF',
          fill: true,

        },
        {
          label: "This Month",
          data: [350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 300],
          backgroundColor: 'rgba(0, 224, 150, 0.3266)',
          borderColor: '#07E098',
          pointHoverRadius: 5,
          pointBorderColor: '#07E098',
          pointHitRadius: 10,
          fill: true,

        },
      ]
    };
  }

  private getChartOption(): ChartConfiguration['options'] {
    return {
      aspectRatio: 1.5,
      plugins: {
        tooltip: {
          yAlign: 'bottom'

        },
        legend: {
          display: false,
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 4
        }
      },
      responsive: true,
      scales: {
        x: {
          display: false,
          grid: {
            display: false
          }
        },
        y: {
          display: false,
          grid: {
            display: false

          },
          beginAtZero: true,
          max: 400
        }
      },

    };
  }




  private createCustomerLineChart(): void {
    const data = this.getChartData();
    const options = this.getChartOption();

    this.chart = new Chart("CustomerLineChart", {
      type: 'line',
      data: data,
      options: options
    });
  }


}
