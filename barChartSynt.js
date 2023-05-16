import Chart from 'chart.js/auto';

const labels = [
  'Haute-Savoie',
  'Chamonix-Mont-Blanc',
];

const data = {
  labels: labels,
  datasets: [{
      label: "Évolution en pourcentage de la superficie des sols artificialisés de 1990 à 2018",
      data: [23, 30],
      backgroundColor: [
        'rgba(230, 0, 77, 0.4)',
        'rgba(230, 0, 77, 0.4)'
      ],
      borderColor: [
        'rgba(230, 0, 77)',
        'rgba(230, 0, 77)'
      ],
      borderWidth: 1
    },
    {
      label: "Évolution en pourcentage de la population de 1990 à 2018",
      data: [45,-10],
      backgroundColor: [
        'rgba(137, 226, 126, 0.4)',
        'rgba(137, 226, 126, 0.4)',
      ],
      borderColor: [
        'rgb(137, 226, 126)',
        'rgb(137, 226, 126)',
      ],
      borderWidth: 1
    }]
};

const chartTitle = ["Comparaison des taux d'artificialisation des sols et de croissance démographique entre 1990 et 2018 dans le département de la Haute-Savoie et la commune de Chamonix-Mont-Blanc"];
const chartSubtitle = ["Sources: INSEE & Corin Land Cover | 1990-2018"];

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
  document.getElementById('barChartSynt'),
  config
);
