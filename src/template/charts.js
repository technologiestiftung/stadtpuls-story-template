// let window.API_BASE_URL = window.API_BASE_URL || `https://stadtpuls.com/data`
window.API_BASE_URL = window.API_BASE_URL || `http://localhost:3333/data`

/* CHART 1 */
/* ------------------------------------------------------- */
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

/* CHART 2 */
/* ------------------------------------------------------- */
fetch(`${API_BASE_URL}/records/12.json`)
  .then((response) => response.json())
  .then(({ data }) => drawChart2(data.slice(0, 200)))
  .catch((err) => console.warn('Something went wrong.', err));

function drawChart2(data) {
  const tickStyles = {
    grid: {
      borderColor: '#f2f3f8',
      tickColor: '#f2f3f8',
      color: '#f2f3f8'
    },
    ticks: {
      backdropColor: '#f2f3f8',
      color: '#636188',
      font: {
        family: '"SpaceMono", monospace',
      },
    },
  };
  const chart2Context = document.getElementById('chart2').getContext('2d');
  new Chart(chart2Context, {
    type: 'line',
    data: {
      labels: data.map(({ recorded_at }) => new Date(recorded_at).toLocaleString('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: 'long',
        year: '2-digit',
      })),
      datasets: [{
        data: data.map(({ measurements }) => measurements[0]),
        borderColor: '#8330ff',
        borderWidth: 1,
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      elements: {
        point: {
          radius: 1.5,
          backgroundColor: '#8330ff',
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          usePointStyle: true,
          backgroundColor: '#100c53',
          padding: 16,
          cornerRadius: 0,
          titleFont: {
            family: 'SpaceGrotesk',
          },
          bodyFont: {
            family: 'SpaceMono',
          },
          callbacks: {
            labelColor: () => ({
              backgroundColor: '#8330ff',
              borderColor: '#8330ff',
              borderWidth: 1,
            }),
          }
        }
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        y: tickStyles,
        x: {
          ...tickStyles,
          ticks: {
            ...tickStyles.ticks,
            callback: function(value, index, values) {
              const label = new Date(data[index].recorded_at).toLocaleString('de-DE', {
                hour: '2-digit',
                minute: '2-digit',
              });
              return index % 4 === 0 ? label : ''
            }
          }
        }
      }
    }
  });
}

/* SENSOR CARD CHART */
/* ------------------------------------------------------- */
fetch(`${API_BASE_URL}/records/10.json`)
  .then((response) => response.json())
  .then(({ data }) => drawChart3(data.slice(0, 50)))
  .catch((err) => console.warn('Something went wrong.', err));

function drawChart3(data) {
  const chart2Context = document.getElementById('sensor-card-chart').getContext('2d');
  new Chart(chart2Context, {
    type: 'line',
    data: {
      labels: data.map(({ recorded_at }) => recorded_at),
      datasets: [{
        data: data.map(({ measurements }) => measurements[0]),
        borderColor: '#8330ff',
        borderWidth: 2,
        fill: false,
        tension: 0.1
      }]
    },
    options: {
      elements: {
        point: {
          radius: 0,
          backgroundColor: '#8330ff',
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      }
    }
  });
}
