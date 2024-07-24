import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BoxContainerComponent } from "../box-container/box-container.component";
import Chart, { ChartConfiguration } from 'chart.js/auto';

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [BoxContainerComponent],
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.scss'
})
export class VisitorComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.creatLineChart();
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
          label: "Loyal Customers",
          data: [350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 300],
          backgroundColor: '#A700FF',
          borderColor: '#A700FF',
          pointHoverRadius: 5,
          pointHitRadius: 10,
        },
        {
          label: "New Customers",
          data: [250, 200, 150, 100, 150, 200, 250, 300, 350, 300, 250, 200],
          backgroundColor: '#EF4444',
          borderColor: '#EF4444',
          pointHoverRadius: 5,
          pointHitRadius: 10,
        },
        {
          label: "Unique Customers",
          data: [250, 350, 350, 300, 250, 200, 150, 100, 100, 200, 300, 350],
          backgroundColor: '#3CD856',
          borderColor: '#3CD856',
          borderWidth: 2,
          pointHoverRadius: 5,
          pointHitRadius: 10,
        },
      ]
    };
  }

  private getChartOption(): ChartConfiguration['options'] {
    return {

      plugins: {

        tooltip: {
          yAlign: 'bottom'

        },
        legend: {
          align: 'center',
          position: 'bottom',

          labels: {
            useBorderRadius: true,
            borderRadius: 2,
            boxWidth: 10,
            boxHeight: 10,
          }
        },

      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0
        }
      },
      responsive: true,
      scales: {
        x: {
          ticks: {
            font: { family: 'Poppins', size: 12, style: 'normal', weight: 'normal' },
            color: '#464E5F'
          },
          grid: {
            display: false
          }
        },
        y: {
          ticks: {
            font: { family: 'Poppins', size: 12, style: 'normal', weight: 'normal' },
            color: '#7B91B0'
          },

          grid: {
            color: 'rgba(70, 78, 95, 0.04)',
            drawTicks: false

          },
          beginAtZero: true,
          max: 400
        }
      },

    };
  }




  private creatLineChart(): void {
    const data = this.getChartData();
    const options = this.getChartOption();


    this.chart = new Chart("LineChart", {
      type: 'line',
      data: data,
      options: options
    });
  }
}
