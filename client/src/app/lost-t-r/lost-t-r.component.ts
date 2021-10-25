import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { lostTRChartOptions } from '../helpers/lostTRChartOptions';

@Component({
  selector: 'app-lost-t-r',
  templateUrl: './lost-t-r.component.html',
  styleUrls: ['./lost-t-r.component.css'],
})
export class LostTRComponent {
  lineChart = new Chart(lostTRChartOptions);
}
