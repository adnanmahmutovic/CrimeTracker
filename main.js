import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat, toLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Icon } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { defaults as defaultControls } from 'ol/control';

// Initialize the map
const map = new Map({
  target: 'map', 
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: fromLonLat([-90.1994, 38.6270]), // St. Louis coordinates
    zoom: 12,
  }),
  controls: defaultControls(),
});

// Sample data: Array of crime locations with type and coordinates
const crimeData = [
  { type: 'Robbery', coordinates: [-90.1994, 38.6270] },  // St. Louis location
  { type: 'Assault', coordinates: [-90.2051, 38.6250] },   // Nearby location
  { type: 'Burglary', coordinates: [-90.2000, 38.6300] },  // Another nearby location
];

// Create a vector layer for crime markers
const crimeLayer = new VectorLayer({
  source: new VectorSource(),
});

// Loop through the crime data and create markers
crimeData.forEach(crime => {
  const coordinates = fromLonLat(crime.coordinates);
  const crimeMarker = new Feature({
    geometry: new Point(coordinates),
    name: crime.type,  // Store crime type as a property for later use
  });

  // random icon style 
  crimeMarker.setStyle(
    new Style({
      image: new Icon({
        src: 'https://openlayers.org/en/latest/examples/data/icon.png',  // change to local image path here
        scale: 1,  // Adjust the size of the icon if needed
      }),
    })
  );

  // Add the marker to the crime layer
  crimeLayer.getSource().addFeature(crimeMarker);
});

// Add the crime layer to the map
map.addLayer(crimeLayer);

// Click event to get coordinates of a click on the map
map.on('click', function (evt) {
  const coordinates = toLonLat(evt.coordinate);
  alert(`Longitude: ${coordinates[0].toFixed(4)}, Latitude: ${coordinates[1].toFixed(4)}`);
});