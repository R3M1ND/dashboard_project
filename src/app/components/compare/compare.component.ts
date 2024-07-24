import { MatIconModule } from '@angular/material/icon';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { BoxContainerComponent } from "../box-container/box-container.component";

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [BoxContainerComponent, MatIconModule],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.scss'
})
export class CompareComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.createBarChart();
  }

  private chart: any;

  private getMonthLabels(): string[] {
    const labels: string[] = [];
    const date = new Date();
    date.setMonth(0);

    for (let index = 0; index < 7; index++) {
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
          label: "Online Sales",
          data: [14, 12, 24, 16, 11,
            20, 10],
          backgroundColor: '#4AB58E',
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.8,


        },
        {
          label: "Offilne Sales",
          data: [13, 10, 15, 4, 10,
            15, 29],
          backgroundColor: '#FFCF00',
          barPercentage: 0.8,
          borderRadius: 4,
          categoryPercentage: 0.8,
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
          display: false,
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
            font: { family: 'Poppins', size: 12, style: 'normal', weight: 'normal' },
            color: '#7B91B0'
          },
          grid: {
            display: false,

          }
        },
        y: {
          display: false,
          beginAtZero: true,
          max: 25,
        }
      },

    }
  }



  private createBarChart(): void {
    const data = this.getChartData();
    const options = this.getChartOptions();

    this.chart = new Chart("CompareBarChart", {
      type: 'bar',
      data: data,
      options: options
    });
  }

}
