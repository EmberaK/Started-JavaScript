"use strict";

var map = L.map('map').setView([50.4501, 30.5234], 13); // Coordinates of Kyiv

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var marker = L.marker([50.4501, 30.5234]).addTo(map);
marker.bindPopup("<b>Kyiv</b><br>The capital of Ukraine.<br>").openPopup();