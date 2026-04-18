const routes = [
  {
    code: 'A1',
    name: 'East Croydon ↔ Croydon University Hospital',
    stops: ['East Croydon Station', 'Croydon Town Centre', 'Wellesley Road', 'Croydon University Hospital']
  },
  {
    code: 'B4',
    name: 'Purley ↔ South Croydon ↔ West Croydon',
    stops: ['Purley Station', 'Brighton Road', 'South Croydon', 'West Croydon Station']
  },
  {
    code: 'C7',
    name: 'Norwood Junction ↔ Addiscombe ↔ New Addington',
    stops: ['Norwood Junction', 'Addiscombe Tram Stop', 'Shirley', 'New Addington']
  },
  {
    code: 'N2',
    name: 'Night Service: Croydon ↔ Thornton Heath ↔ Crystal Palace',
    stops: ['Croydon Clocktower', 'Thornton Heath', 'Anerley Hill', 'Crystal Palace Parade']
  }
];

const routeList = document.getElementById('route-list');

function toGoogleMapsLink(stops) {
  const [origin, ...middleAndDest] = stops;
  const destination = middleAndDest[middleAndDest.length - 1];
  const waypoints = middleAndDest.slice(0, -1).join('|');

  const params = new URLSearchParams({
    api: '1',
    travelmode: 'driving',
    origin: `${origin}, Croydon, UK`,
    destination: `${destination}, Croydon, UK`,
    waypoints: waypoints ? `${waypoints}, Croydon, UK` : ''
  });

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

routes.forEach((route) => {
  const item = document.createElement('li');
  item.className = 'route-item';
  item.innerHTML = `
    <strong>${route.code} — ${route.name}</strong>
    <span>Stops: ${route.stops.join(' → ')}</span><br>
    <a href="${toGoogleMapsLink(route.stops)}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
  `;

  routeList.appendChild(item);
});

document.getElementById('year').textContent = new Date().getFullYear();
