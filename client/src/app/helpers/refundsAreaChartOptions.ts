import { Options } from 'highcharts';

export const refundsAreaChartOptions: Options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'By Hour',
    style: {
      fontWeight: 'bold',
    },
  },

  yAxis: {
    title: {
      text: 'Success Rate',
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
      name: 'Warning Pivot',
      type: 'line',
      color: '#FFC100',
      data: [55, 60, 70, 80, 90, 60, 50, 60, 60],
    },
    {
      name: 'Average',
      type: 'line',
      color: '#4573C4',
      data: [40, 20, 10, 90, 85, 50, 45, 60, 90],
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
