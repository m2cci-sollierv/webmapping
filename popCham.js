import Chart from 'chart.js/auto';

const labels = [
  'Population à Chamonix-Mont-Blanc en 1990',
  'Population à Chamonix-Mont-Blanc en 2018',

];

const data = {
  labels: labels,
  datasets: [{
    label: 'Population à Chamonix-Mont-Blanc',
    data: [9701, 8640],
    backgroundColor: [
      'rgba(137, 226, 126, 0.4)',
      'rgba(137, 226, 126, 0.4)'
    ],
    borderColor: [
      'rgb(137, 226, 126)',
      'rgb(137, 226, 126)',
    ],
    borderWidth: 2
  }]  
};

const chartTitle = ['Part de la population à Chamonix-Mont-Blanc en 1990 et en 2018'];
const chartSubtitle = ['Source: INSEE - Recensement population 1990-2019'];

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: chartTitle,
        padding: {
          top: 30,
          bottom: 5
        }
      },
      subtitle: {
        display: true,
        text: chartSubtitle
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('popCham'),
  config
);
