const routes = [
  { code: 'A1', name: 'East Croydon ↔ Croydon University Hospital', frequency: 'Every 10 mins' },
  { code: 'B4', name: 'Purley ↔ South Croydon ↔ West Croydon', frequency: 'Every 12 mins' },
  { code: 'C7', name: 'Norwood Junction ↔ Addiscombe ↔ New Addington', frequency: 'Every 15 mins' },
  { code: 'N2', name: 'Night Service: Croydon ↔ Thornton Heath ↔ Crystal Palace', frequency: 'Every 30 mins' },
  { code: 'D3', name: 'Sanderstead ↔ Lloyd Park ↔ East Croydon', frequency: 'Every 20 mins' },
  { code: 'E8', name: 'Waddon ↔ Centrale ↔ Selhurst', frequency: 'Every 18 mins' }
];

const routeGrid = document.getElementById('route-grid');

routes.forEach((route) => {
  const card = document.createElement('li');
  card.className = 'route-card';
  card.innerHTML = `
    <strong>${route.code}</strong>
    <span>${route.name}</span><br>
    <small>${route.frequency}</small>
  `;
  routeGrid.appendChild(card);
});

document.getElementById('year').textContent = new Date().getFullYear();
