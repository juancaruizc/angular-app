import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { refundsBarChartOptions } from '../helpers/refundsBarChartOptions';
import { refundsAreaChartOptions } from '../helpers/refundsAreaChartOptions';

@Component({
  selector: 'app-refund-view',
  templateUrl: './refund-view.component.html',
  styleUrls: ['./refund-view.component.css'],
})
export class RefundViewComponent {
  barChart = new Chart(refundsBarChartOptions);
  lineChart = new Chart(refundsAreaChartOptions);
}
