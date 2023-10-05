// Leaflet Map
var marker;
var pos = L.latLng(37.7964333, -1.5121459);
var map = L.map("map").setView(pos, 8);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  preload: true,
  formatData: "webp",
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker(pos)
  .bindTooltip("Location", {
    offset: [-15, -8],
    className: "house-tooltip",
    permanent: true,
    direction: "top",
    opacity: 0.75,
    styles: ["background-color: white"]
  })
  .addTo(map);
