const routes = [
  { code: 'A1', name: 'Beddington ↔ Mitcham Common', type: 'antimony Exclusive' },
  { code: 'A2', name: 'Thornton Heath High Street ↔ Thornton Heath Pond', type: 'antimony Exclusive' },
  { code: 'A3', name: 'Norwood Junction ↔ Addiscombe', type: 'antimony Exclusive' },
  { code: 'A4', name: 'Night Service: Croydon ↔ Thornton Heath', type: 'antimony Exclusive' },
  { code: 'A', name: 'Waddon ↔ Centrale', type: 'School' }
];

const routeGrid = document.getElementById('route-grid');

routes.forEach((route) => {
  const card = document.createElement('li');
  card.className = 'route-card';
  card.innerHTML = `
    <strong>${route.code}</strong>
    <span>${route.name}</span><br>
    <small>${route.type}</small>
  `;
  routeGrid.appendChild(card);
});

document.getElementById('year').textContent = new Date().getFullYear();
