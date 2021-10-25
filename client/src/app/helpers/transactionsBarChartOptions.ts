import { Options } from 'highcharts';

export const transactionsBarChartOptions: Options = {
  chart: {
    type: 'column',
  },
  credits: {
    enabled: false,
  },
  title: {
    text: 'By Area',
    style: {
      fontWeight: 'bold',
    },
  },
  yAxis: {
    visible: true,
    gridLineColor: '#fff',
    title: {
      text: 'Number of Transactions',
    },
  },
  legend: {
    enabled: true,
  },
  xAxis: {
    lineColor: '#fff',
    categories: ['Amazon', 'Microsoft', 'Logitech', 'Intel', 'Google'],
  },

  series: [
    {
      type: 'column',
      name: 'Success',
      color: '#37AA6F',
      data: [
        { y: 60000000 },
        { y: 50000000 },
        { y: 40000000 },
        { y: 55000000 },
        { y: 20000000 },
      ],
    },
    {
      type: 'column',
      name: 'Error',
      color: '#AB1F17',
      data: [
        { y: 20000000 },
        { y: 10000000 },
        { y: 30000000 },
        { y: 10000000 },
        { y: 15000000 },
      ],
    },
  ],
};
