import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

const chart1Context = document.getElementById('chart1').getContext('2d');
new Chart(chart1Context, {
    type: 'doughnut',
    data: {
      labels: [
        'Data analyst or business analyst',
        'Data scientist',
        'Data architecht',
        'Journalist',
        'Educator',
        'Student',
        'Other',
        'Front-end developer',
        'Academic or government researcher',
        'Hobbyist',
      ],
      datasets: [{
        data: [3, 7, 10, 3, 5, 6, 7, 14, 14, 31],
        backgroundColor: [
          '#E25609',
          '#C44104',
          '#9F3303',
          '#B5D4E9',
          '#99C7E1',
          '#79B5D9',
          '#5BA3CF',
          '#418FC5',
          '#2A7AB9',
          '#2164AA',
        ],
        hoverOffset: 4
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
    }
});