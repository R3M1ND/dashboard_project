import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BoxContainerComponent } from "../box-container/box-container.component";
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [BoxContainerComponent],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.createBarChart();
  }

  private chart: any;


  private getChartData(): ChartConfiguration['data'] {

    return {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: "Service",
          data: [14, 12, 24, 16, 11,
            20],
          backgroundColor: '#00E096',
          borderRadius: 2,
          barPercentage: 0.6,
          categoryPercentage: 0.5,
        },
        {

          label: "Volume",
          data: [13, 10, 15, 4, 10,
            15],
          backgroundColor: '#0095FF',
          barPercentage: 0.6,
          categoryPercentage: 0.5,

        }
      ]
    };
  }

  private getChartOptions(): ChartConfiguration['options'] {
    return {

      plugins: {
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
          display: false,
          stacked: true,
        },
        y: {
          display: false,
          stacked: true,
        }
      },

    }
  }



  private createBarChart(): void {
    const data = this.getChartData();
    const options = this.getChartOptions();

    this.chart = new Chart("LevelBarChart", {
      type: 'bar',
      data: data,
      options: options
    });
  }

}
