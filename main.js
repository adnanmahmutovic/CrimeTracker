import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat, useGeographic } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { defaults as defaultControls } from 'ol/control';
import GeoJSON from 'ol/format/GeoJSON';

// Initialize the map
useGeographic();
const view = new View({
  center: [-90.1994, 38.627], // St. Louis coordinates
  zoom: 12,
});
const map = new Map({
  target: 'heatmap',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new VectorLayer({
      source: new VectorSource({
        url: './crime_data.geojson',
        format: new GeoJSON(),
      }),
    }),
  ],
  view: view,
});

// Click event to get coordinates of a click on the map
map.on('click', function (evt) {
  const coordinates = toLonLat(evt.coordinate);
  alert(
    `Longitude: ${coordinates[0].toFixed(
      4
    )}, Latitude: ${coordinates[1].toFixed(4)}`
  );
});

document.addEventListener('DOMContentLoaded', () => {
  // Heatmap Interactivity
  const heatmap = document.getElementById('heatmap');
  heatmap.addEventListener('mouseenter', () => {
    heatmap.style.filter = 'brightness(0.9)';
    heatmap.style.cursor = 'pointer';
  });

  heatmap.addEventListener('mouseleave', () => {
    heatmap.style.filter = 'brightness(1)';
  });

  heatmap.addEventListener('click', () => {
    alert('You clicked on the heatmap! Detailed crime stats coming soon.');
  });

  // Dynamic Search Feedback
  const searchInput = document.getElementById('searchInput');
  const feedback = document.getElementById('search-feedback');

  searchInput.addEventListener('input', () => {
    const location = searchInput.value.trim();
    feedback.textContent = location
      ? `Searching for: ${location}...`
      : 'Start typing to search for a location.';
  });
});
