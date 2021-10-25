import { Options } from 'highcharts';

export const barChart: Options = {
  chart: {
    type: 'column',
  },
  credits: {
    enabled: false,
  },
  title: {
    text: 'By Area',
  },
  yAxis: {
    visible: true,
    gridLineColor: '#fff',
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    lineColor: '#fff',
    categories: ['Amazon', 'Microsoft', 'Logitech', 'Intel', 'Google'],
  },

  plotOptions: {
    // series: {
    //   borderRadius: 15,
    // } as any,
  },

  series: [
    {
      type: 'column',
      color: '#37AA6F',
      data: [
        { y: 20.9 },
        { y: 71.5 },
        { y: 106.4 },
        { y: 129.2 },
        { y: 144.0 },
      ],
    },
  ],
};
