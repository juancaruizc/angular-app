import { Options } from 'highcharts';

export const lostTRChartOptions: Options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'By System',
  },

  yAxis: {
    title: {
      text: 'Number of Missing Events',
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 12 to 8',
    },
  },
  credits: {
    enabled: false,
  },

  legend: {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 12,
    },
  },

  series: [
    {
      name: 'Amazon',
      type: 'line',
      color: '#62AA37',
      data: [55, 50, 70, 90, 90, 60, 40, 60, 60],
    },
    {
      name: 'Microsoft',
      type: 'line',
      color: '#5E51A3',
      data: [40, 20, 10, 90, 85, 50, 45, 60, 90],
    },
    {
      name: 'Logitech',
      type: 'line',
      color: '#FEAC03',
      data: [20, 10, 20, 60, 45, 30, 25, 70, 90],
    },
    {
      name: 'Intel',
      type: 'line',
      color: '#019DDE',
      data: [10, 20, 30, 50, 70, 60, 45, 40, 10],
    },
    {
      name: 'Google',
      type: 'line',
      color: '#B3B3B3',
      data: [30, 90, 10, 50, 45, 56, 35, 40, 80],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
};
