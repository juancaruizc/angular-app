import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { transactionsAreaChartOptions } from '../helpers/transactionsAreaChartOptions';
import { transactionsBarChartOptions } from '../helpers/transactionsBarChartOptions';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css'],
})
export class TransactionViewComponent {
  barChart = new Chart(transactionsBarChartOptions);
  areaSplineChart = new Chart(transactionsAreaChartOptions);
}
