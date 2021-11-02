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
fetch('https://api.stadtpuls.com/api/v3/sensors/12/records')
  .then((response) => response.json())
  .then(({ data }) =>	drawChart2(data.slice(0, 200)))
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
fetch('https://api.stadtpuls.com/api/v3/sensors/10/records')
  .then((response) => response.json())
  .then(({ data }) =>	drawChart3(data.slice(0, 50)))
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

/* SENSOR CARD MAP */
/* ------------------------------------------------------- */
const allSensorCards = Array.from(document.getElementsByClassName('sensor-card'))
allSensorCards.forEach((el) => {
  const id = el.getAttribute("data-sensor-id")
  if (!id) return
  fetchAndShowSensorInfo(id, el)
})

function fetchAndShowSensorInfo(sensorId, el) {
  fetch(`https://api.stadtpuls.com/api/v3/sensors/${sensorId}`)
    .then((response) => response.json())
    .then(({ data }) =>	{
      if (data.length === 0 || !data[0]) return
      fillSensorHTML(el, data[0])
      drawSensorCardMap(el, data[0])
    })
    .catch((err) => console.warn(`Something went wrong when fetching sensor with id ${id}.`, err));
}

function drawSensorCardMap(el, data) {
  const mapEl = el.getElementsByClassName('sensor-card-map')[0];
  if (!mapEl) return
  const map = new mapboxgl.Map({
    container: mapEl,
    style: 'mapbox://styles/technologiestiftung/ckquzll4z1usx17rwlc5gyq7v',
    center: [data.longitude, data.latitude],
    zoom: 12,
    logoPosition: 'top-left',
    attributionControl: false
  });
  map.addControl(new mapboxgl.AttributionControl(), 'top-right');
}

function fillSensorHTML(el, data) {
  el.innerHTML = `
  <h4 class="sensor-card-title">
    <img src="https://stadtpuls.com/images/sensor-symbols/${data.id}.svg" alt="Symbol für das Sensor \"${data.name}\"" />
    <span>${data.name}</span>
  </h4>
  <div class="sensor-card-metadata">
    <span class="sensor-card-type">
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" role="img">
        <path d="M14 5a1 1 0 0 1 0 2h-3v8a1 1 0  0 1-2 0v-4H7v4a1 1 0 0 1-2 0V7H2a1 1 0 1 1 0-2h12ZM8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="currentColor" fill-rule="nonzero"></path>
      </svg>
      <span>${data.category_id}</span>
    </span>
    <span class="sensor-card-author">
      <img src="https://source.boringavatars.com/pixel/24/janedoe?colors=F9FCFD,100C53,0000C2,46ECA1,8330FF,F2F3F8,CFD0DC" alt="Avatar of janedoe" />
      <span>${data.user_id}</span>
    </span>
  </div>
  <p class="sensor-card-description">
    ${data.description}
  </p>
  <section class="sensor-card-graphics">
    <div class="sensor-card-map" id="sensor-card-map"></div>
    <div class="sensor-card-graphics-gradient"></div>
    <canvas id="sensor-card-chart" height="75px"></canvas>
  </section>
`
}
