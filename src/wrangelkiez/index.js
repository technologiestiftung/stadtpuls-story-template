hljs.highlightAll();

function drawChart3(data,id) {

  var names = data.map(function(d) {return d.name});
  var sensor22 = data.map(function(d) {return d.sensor22});
  var sensor24 = data.map(function(d) {return d.sensor24});
  var sensor25 = data.map(function(d) {return d.sensor25});
  var sensor27 = data.map(function(d) {return d.sensor27});
  var sensor28 = data.map(function(d) {return d.sensor28});
  var sensor29 = data.map(function(d) {return d.sensor29});


  const chart3Context = document.getElementById('chart'+id).getContext('2d');
  new Chart(chart3Context, {

      type: 'radar',
      data: {
        labels: names,
        datasets: [{
          label: 'Albert (Wrangelstr.)',
          data: sensor22,
          fill: false,
          backgroundColor: 'rgba(180, 180, 199, 0.0)',
          borderColor: '#ff568d',
          
        }, {
          label: 'Camille (Görlitzer Str.)',
          data: sensor24,
          fill: false,
          backgroundColor: 'rgba(131, 48, 255, 0.0)',
          borderColor: '#8330FF'
        }, {
          label: 'Dafne (Wrangelstr.)',
          data: sensor25,
          fill: false,
          backgroundColor: 'rgba(16, 12, 83, 0.2)',
          borderColor: '#100c53'
        }, {
          label: 'Fadil (Falkensteinstr.)',
          data: sensor27,
          fill: false,
          backgroundColor: 'rgba(0, 0, 194, 0.0)',
          borderColor: '#0000c2'
        }, {
          label: 'Grace (Skalitzer Str.)',
          data: sensor28,
          fill: false,
          backgroundColor: 'rgba(70, 236, 161, 0.0)',
          borderColor: '#46ECA1'
        }, {
          label: 'Hector (Lübbener Str.)',
          data: sensor29,
          fill: false,
          backgroundColor: 'rgba(255, 183, 86, 0.0)',
          borderColor: '#ffb756'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }, 
  });
}
// const chart1Context = document.getElementById('chart1').getContext('2d');
// new Chart(chart1Context, {
//     type: 'doughnut',
//     data: {
//       labels: [
//         'Datenanalyse',
//         'Datenwissenschaft',
//         'Datenarchitektur',
//         'Journalismus',
//         'Datenlehre',
//         'Datenstudie',
//         'Weiteres',
//         'Datenvisualisierung',
//         'Datenforschung',
//         'Internet Of Things',
//       ],
//       datasets: [{
//         data: [3, 7, 10, 3, 5, 6, 7, 14, 14, 31],
//         backgroundColor: [
//           '#0000C2',
//           '#46ECA1',
//           '#8330FF',
//           '#B4B4C7',
//           '#9695AE',
//           '#787696',
//           '#636188',
//           '#4A4878',
//           '#332F66',
//           '#1E1A5A',
//         ],
//         hoverOffset: 4
//       }]
//     },
//     options: {
//       plugins: {
//         legend: {
//           display: false
//         }
//       },
//     }
// });

const timeStamp = (old_date) => {
  let now = new Date(old_date)
  return now;
};

function drawChart2(data) {
  
  var timeline = data.map(function(d) {return new Date(d.time)});
  console.log(timeline)
  var rm = data.map(function(d) {return parseInt(d.rm)});
  //console.log(rm)

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
  window.myChart = new Chart(chart2Context, {
      type: 'line',
      data: {
        labels: timeline,
        datasets: [{
          data: rm,
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
                backgroundColor: '#8330ff0',
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
          y: {
            title: {
              display: true,
              text: 'Value'
            },
            min: 1350,
            max: 1850,
            ticks: {
              // forces step size to be 50 units
              stepSize: 50
            }
          },
          x: {
            type: 'time',
            ...tickStyles,
              time: {
                unit: 'day',
                // tooltipFormat: 'ddd, MMMM dd, yyyy',
                // displayFormats: {
                //     day: 'd dd ddd dddd',
                // },
            //     ticks: {
            //       ...tickStyles.ticks,

            //   callback: function(value, index, values) {
            //     const label = new Date(data[index].time).toLocaleString('de-DE', {
            //       month: 'short',
            //       day: '2-digit',
            //       hour: '2-digit',
            //       weekday:'short'
            //     });
            //     return index % 4 === 0 ? label : 't'
            //   }
            // }
            }
          }
        }
      }
   
  });
//console.log(myChart)
  
}

d3.csv('/wrangelkiez/vendor/data/22.csv')
  .get(function(data) {drawChart2(data) 
});

var element = document.getElementById('id-hidden');
element.addEventListener('DOMSubtreeModified', rebuildChart);
  function rebuildChart() {
    window.myChart.destroy()
    d3.csv('/wrangelkiez/vendor/data/'+ element.innerHTML +'.csv')
    .get(function(data) {drawChart2(data) 
  });
  }

  d3.csv('/wrangelkiez/vendor/data/tod.csv')
  .get(function(data) {drawChart3(data,3) 
});
d3.csv('/wrangelkiez/vendor/data/day.csv')
.get(function(data) {drawChart3(data,4) 
});
d3.csv('/wrangelkiez/vendor/data/hour.csv')
.get(function(data) {drawChart3(data,5) 
});