hljs.highlightAll();

const chart1Context = document.getElementById('chart1').getContext('2d');
new Chart(chart1Context, {
    type: 'doughnut',
    data: {
      labels: [
        'Datenanalyse',
        'Datenwissenschaft',
        'Datenarchitektur',
        'Journalismus',
        'Datenlehre',
        'Datenstudie',
        'Weiteres',
        'Datenvisualisierung',
        'Datenforschung',
        'Internet Of Things',
      ],
      datasets: [{
        data: [3, 7, 10, 3, 5, 6, 7, 14, 14, 31],
        backgroundColor: [
          '#0000C2',
          '#46ECA1',
          '#8330FF',
          '#B4B4C7',
          '#9695AE',
          '#787696',
          '#636188',
          '#4A4878',
          '#332F66',
          '#1E1A5A',
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