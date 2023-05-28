import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables, ChartType } from 'chart.js';
import { LocalService } from '../local.service';
import { User } from '../user';
Chart.register(...registerables);

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements AfterViewInit, OnInit { showOptions: boolean = false;


  @ViewChild('myChartCanvas', { static: true }) myChartCanvas!: ElementRef;
  @ViewChild('myOtherChartCanvas', { static: true }) myOtherChartCanvas!: ElementRef;
  @ViewChild('myThirdChartCanvas', { static: true }) myThirdChartCanvas!: ElementRef;
  title = 'chartDemo';
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
  user!:User;
  nom!:any;
  prenom!:any;
  ngOnInit() {
    this.user = history.state.user;
    this.createCharts();
    this.nom=this.localStore.getData('nom');
    this.prenom=this.localStore.getData('prenom');
    let data=this.localStore.getData('role');
      if(data=="0"){
        this.router.navigate(["/"]);
      }else if(data=="1"){
        this.router.navigate(["/agence"]);
      }else if(data=="2"){
        this.router.navigate(["/encaissement"]);
      }else if(data=="3"){
        this.router.navigate(["/administrateur"]);
      }else{
        this.router.navigate(["/client"]);
      }
    
  }
  Deconnexion(){
    this.localStore.saveData('role',"0");
    location.reload();
  }
constructor(private router:Router,private localStore:LocalService){}
  ngAfterViewInit() {
    this.createCharts();
  }

  createCharts() {
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

    const otherCanvas: HTMLCanvasElement = this.myOtherChartCanvas.nativeElement;
    const otherCtx: CanvasRenderingContext2D | null = otherCanvas.getContext('2d');

    if (otherCtx !== null) {
      const otherData = {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      };

      var otherChart = new Chart(otherCtx, {
        type: 'bar' as ChartType,
        data: otherData,
        options: {}
      });
    }

    const thirdCanvas: HTMLCanvasElement = this.myThirdChartCanvas.nativeElement;
    const thirdCtx: CanvasRenderingContext2D | null = thirdCanvas.getContext('2d');

    if (thirdCtx !== null) {
      const thirdData = {
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
        datasets: [{
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      };

      var thirdChart = new Chart(thirdCtx, {
        type: 'polarArea' as ChartType,
        data: thirdData,
        options: {}
      });
    }
  }

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
