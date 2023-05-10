import { MarkerClusterer } from '@googlemaps/markerclusterer';

const locations = [
  { position: { lat: 25, lng: 39 }, label: 'احمد محمر' },
  { position: { lat: 25, lng: 49 }, label: 'ياسر فالخ' },
  { position: { lat: 21, lng: 40 }, label: 'سعود عبدالعزيز' },
  { position: { lat: 20, lng: 45 }, label: 'طارق العواد' },
];
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: { lat: 22, lng: 45 },
  });
  const infoWindow = new google.maps.InfoWindow({
    content: '',
    disableAutoPan: true,
  });
  // Add some markers to the map.
  const markers = locations.map(({ position, label }) => {
    const marker = new google.maps.Marker({
      position,
      label: label[0],
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener('click', () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });
}

window.initMap = initMap;
