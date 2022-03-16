// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [33.5779, -101.8552],
    [30.1975, -97.6664],
    [43.6777, -79.6248]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: "4",
    opacity: "0.5",
    dashArray: "4"
  }).addTo(map);

// Get data from cities.js
//let cityData = cities;

// Loop through the cities array and create one marker for each city.
//cityData.forEach(city => {
   // console.log(city);
   // L.circleMarker(city.location, {
   //     radius: city.population/200000,
   //     color: "orange",
    //    fillColor: "orange",
   //     fillOpacity: 0.1,
   //     weight: 3
  //  })
   // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  //  .addTo(map);
//});

//  Add a marker to the map for Los Angeles, California.
//L.circleMarker([34.0522, -118.2437], {
//    color: "black",
//    fillColor: "lightyellow",
//    fillOpacity: 0.5,
//    radius: 300
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox.streets',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);