import 'ol/ol.css';
import './style.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import { fromLonLat } from 'ol/proj';
import LayerSwitcher from 'ol-ext/control/LayerSwitcher';

import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Popup from 'ol-popup';


// Créer la couche du fond de carte OpenStreetMap
const osmLayer = new TileLayer({
  title: 'OpenStreetMap',
  type: 'base',
  visible: true,
  source: new OSM()
});
const osmLayer2 = new TileLayer({
  title: 'OpenStreetMap',
  type: 'base',
  visible: true,
  source: new OSM()
});

// Créer les couches de style pour le département de la Haute Savoie
const styleHauteSavoie90 = function (feature) {
  const zoneArtif = feature.get('CODE_90');
  let color = '';
  if (zoneArtif < 200) {
    color = '#e6004d';
  } else {
    color = '#6DD800';
  }
  return new Style({
    fill: new Fill({
      color: color
    }),
    stroke: new Stroke({
      color: '#000000',
      width: 0.01
    })
  });
};
const styleHauteSavoie18 = function (feature) {
  const zoneArtif = feature.get('code_18');
  let color = '';
  if (zoneArtif < 200) {
    color = '#e6004d';
  } else {
    color = '#6DD800';
  }
  return new Style({
    fill: new Fill({
      color: color
    }),
    stroke: new Stroke({
      color: '#000000',
      width: 0.01
    })
  });
};

// Créer les couches de style pour la commune de Chamonix
const styleCham90 = function (feature) {
  const zoneArtif = feature.get('CODE_90');
  let color = '';
  if (zoneArtif < 200) {
    color = '#e6004d';
  } else {
    color = '#6DD800';
  }
  return new Style({
    fill: new Fill({
      color: color
    }),
    stroke: new Stroke({
      color: '#000000',
      width: 0.01
    })
  });
};

const styleCham18 = function (feature) {
  const zoneArtif = feature.get('code_18');
  let color = '';
  if (zoneArtif < 200) {
    color = '#e6004d';
  } else {
    color = '#6DD800';
  }
  return new Style({
    fill: new Fill({
      color: color
    }),
    stroke: new Stroke({
      color: '#000000',
      width: 0.01
    })
  });
};

// Créer la couche pour la Haute-Savoie en 1990
const hauteSavoie90 = new VectorLayer({
  source: new VectorSource({
    url: 'data/hautesavoie_90.geojson',
    format: new GeoJSON()
  }),
  style: styleHauteSavoie90,
  title: 'Occupation du sol en Haute-Savoie en 1990',
  visible: true
});

// Créer la couche pour la Haute-Savoie en 1990
const hauteSavoie18 = new VectorLayer({
  source: new VectorSource({
    url: 'data/hautesavoie_18.geojson',
    format: new GeoJSON()
  }),
  style: styleHauteSavoie18,
  title: 'Occupation du sol en Haute-Savoie en 2018',
  visible: true
});

// Créer la couche pour Chamonix en 1990
const cham90 = new VectorLayer({
  source: new VectorSource({
    url: 'data/cham_90.geojson',
    format: new GeoJSON()
  }),
  style: styleCham90,
  title: 'Occupation du sol à Chamonix en 1990',
  visible: true
});

// Créer la couche pour Chamonix en 1990
const cham18 = new VectorLayer({
  source: new VectorSource({
    url:'data/cham_18.geojson',
    format: new GeoJSON()
  }),
  style: styleCham18,
  title: 'Occupation du sol à Chamonix en 2018',
  visible: true
});


// Créer la carte OpenLayers pour la Haute-Savoie
const map = new Map({
  target: 'map',
  layers: [
    osmLayer,
    hauteSavoie18,
    hauteSavoie90,
    cham90,
    cham18
    
  ],
  view: new View({
    center: fromLonLat([6.4963, 46.05]), 
    zoom: 9.5
  }),
});

//Ajout du gestionnaire de couche
const layerSwitcher = new LayerSwitcher({
  reverse: true,
  groupSelectStyle: 'group'
});

map.addControl(layerSwitcher);