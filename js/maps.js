function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.066715, lng: 18.428089},
    zoom: 11,
    disableDefaultUI: true,
    zoomControl: false,
    styles: [
{
"elementType": "geometry",
"stylers": [
  {
    "color": "#212121"
  }
]
},
{
"elementType": "labels.icon",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#212121"
  }
]
},
{
"featureType": "administrative",
"elementType": "geometry",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"featureType": "administrative.country",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#9e9e9e"
  }
]
},
{
"featureType": "administrative.locality",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#bdbdbd"
  }
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
  {
    "color": "#181818"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#616161"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#1b1b1b"
  }
]
},
{
"featureType": "road",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2c2c2c"
  }
]
},
{
"featureType": "road",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#8a8a8a"
  }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
  {
    "color": "#373737"
  }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#00b8d4"
  },
  {
    "saturation": -60
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
  {
    "color": "#3c3c3c"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#00b8d4"
  },
  {
    "saturation": -50
  }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry",
"stylers": [
  {
    "color": "#4e4e4e"
  }
]
},
{
"featureType": "road.local",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#00b8d4"
  },
  {
    "saturation": -60
  }
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#616161"
  }
]
},
{
"featureType": "transit",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
  {
    "color": "#000000"
  }
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2d2d2d"
  }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#3d3d3d"
  }
]
}
      ]
  });
  var marker = new google.maps.Marker({
position: {lat: 50.066715, lng: 18.428089},
map: map,
label: {
  fontFamily: 'Fontawesome',
  text: '\uf041', //code for font-awesome icon
  fontSize: '35px',
  color: '#ffd624'
},
icon: {
  path: google.maps.SymbolPath.CIRCLE, //or any others
  scale: 0
}
});
}
