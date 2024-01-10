// const campground = require("../../models/campground");

// const campground = require("../../models/campground");

mapboxgl.accessToken=mapToken;

const map=new mapboxgl.Map({
  container:'map',
  style:'mapbox://styles/mapbox/streets-v12',
  center:[ 4.354001, 50.85584 ], 
  zoom:9
});

new mapboxgl.Marker()
.setLngLat([ 4.354001, 50.85584 ])
.addTo(map);