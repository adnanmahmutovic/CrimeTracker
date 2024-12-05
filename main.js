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
import Overlay from 'ol/Overlay';

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
// Create a popup overlay
const popupContainer = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const overlay = new Overlay({
  element: popupContainer,
  autoPan: true,
  autoPanAnimation: {
    duration: 250,
  },
});
map.addOverlay(overlay);


map.on('click', function (evt) {
  const coordinate = evt.coordinate;
  let featureFound = false;

  map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    const properties = feature.getProperties();
    if (properties.crime_offense) {
      featureFound = true;
      // Populate the popup with crime details
      popupContent.innerHTML = `
        <h3>${properties.crime_offense}</h3>
        <p><strong>ID:</strong> ${properties.rand_point_id}</p>
        <p><strong>Coordinates:</strong> ${coordinate[1].toFixed(4)}, ${coordinate[0].toFixed(4)}</p>
      `;
      overlay.setPosition(coordinate);
    }
  });

  // If no feature is clicked, hide the popup
  if (!featureFound) {
    overlay.setPosition(undefined);
  }

  const closer = document.getElementById('popup-closer');
  closer.onclick = function () {
    overlay.setPosition(undefined);
    return false;
  };
});  // <-- Closing the map click event handler here

  // Dynamic Search Feedback
  const searchInput = document.getElementById('searchInput');
  const feedback = document.getElementById('search-feedback');

  searchInput.addEventListener('input', () => {
    const location = searchInput.value.trim();
    feedback.textContent = location
      ? `Searching for: ${location}...`
      : 'Start typing to search for a location.';
  });
