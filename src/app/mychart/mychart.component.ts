import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements AfterViewInit {
  @ViewChild('myChartCanvas', { static: true }) myChartCanvas!: ElementRef;
  title = 'chartDemo';

  ngAfterViewInit() {
    const canvas: HTMLCanvasElement = this.myChartCanvas.nativeElement;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (ctx !== null) {
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Data1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "#0196FD",
            borderColor: "#0196FD",
            borderWidth: 1
          },
          {
            label: 'Data2',
            data: [19, 12, 5, 3, 1, 6],
            backgroundColor: "#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
