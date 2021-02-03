import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-doughnut',
  templateUrl: './grafico-doughnut-component.html',
  styles: [],
})
export class GraficoDoughnutComponent implements OnInit {
  @Input('chartLabels')doughnutChartLabels: string[] = [];
  @Input('chartData')doughnutChartData: number[] = [];
  @Input('chartType')doughnutChartType: string = '';

  constructor() {}

  ngOnInit(): void {}
}
