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
  },
  {
    code: 'D3',
    name: 'Sanderstead ↔ Lloyd Park ↔ East Croydon',
    stops: ['Sanderstead Village', 'Purley Oaks', 'Lloyd Park', 'East Croydon Station']
  },
  {
    code: 'E8',
    name: 'Waddon ↔ Centrale ↔ Selhurst',
    stops: ['Waddon Marsh', 'Centrale Shopping Centre', 'West Croydon', 'Selhurst Station']
  }
];

const routeGrid = document.getElementById('route-grid');
const routeModal = document.getElementById('route-modal');
const routeModalTitle = document.getElementById('route-modal-title');
const routeModalStops = document.getElementById('route-modal-stops');

function openRouteModal(route) {
  routeModalTitle.textContent = `${route.code} — ${route.name}`;
  routeModalStops.innerHTML = route.stops.map((stop) => `<li>${stop}</li>`).join('');
  routeModal.showModal();
}

routes.forEach((route) => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'route-card';
  card.innerHTML = `
    <strong>${route.code}</strong>
    <span>${route.name}</span>
  `;

  card.addEventListener('click', () => openRouteModal(route));
  routeGrid.appendChild(card);
});

document.getElementById('close-route-modal').addEventListener('click', () => {
  routeModal.close();
});

routeModal.addEventListener('click', (event) => {
  const dimensions = routeModal.getBoundingClientRect();
  const isInDialog =
    dimensions.top <= event.clientY &&
    event.clientY <= dimensions.top + dimensions.height &&
    dimensions.left <= event.clientX &&
    event.clientX <= dimensions.left + dimensions.width;

  if (!isInDialog) {
    routeModal.close();
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
