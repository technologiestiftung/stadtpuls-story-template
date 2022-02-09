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
    .catch((err) => console.warn(`Something went wrong when fetching sensor with id ${sensorId}.`, err));
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
  el.setAttribute('href', `https://stadtpuls.com/sensors/${data.id}`)
  el.innerHTML = `
  <h4 class="sensor-card-title">
    <img src="https://stadtpuls.com/images/sensor-symbols/${
      data.icon_id
    }.svg" alt="Symbol für das Sensor \"${data.name}\"" />
    <span>${data.name}</span>
  </h4>
  ${(!!data.user || !!data.category && `
    <div class="sensor-card-metadata">
      ${(!!data.category && `
        <span class="sensor-card-type">
          <span>${data.category.name}</span>
        </span>
      `) || ''}
      ${(!!data.user && `
        <span class="sensor-card-author">
          <img
            src="https://source.boringavatars.com/pixel/24/${data.user.name}?colors=F9FCFD,100C53,0000C2,46ECA1,8330FF,F2F3F8,CFD0DC"
            alt="Stadtpuls svatar of ${data.user.display_name}"
          />
          <span>${data.user.display_name}</span>
        </span>
      `) || ''}
    </div>
  `) || ''}
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
