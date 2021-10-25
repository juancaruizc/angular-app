import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { barChart } from '../helpers/barChart';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css'],
})
export class TransactionViewComponent {
  barChart = new Chart(barChart);
}
