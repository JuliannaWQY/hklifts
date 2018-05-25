var map = L.map('map', {
    center: [
        22.295977, 114.171912
    ],
    zoom: 12
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

for (var i = 0; i < markers.length; ++i) {
    if (markers[i].years == "30 years or above") {
        L.circle([markers[i].lat, markers[i].lon], {
                color: "#DB4D6D",
                fillOpacity: 0.5,
            })
            .bindPopup('Address: ' + markers[i].address + '<br>' + '  Age: ' + markers[i].years)
            .addTo(map);
    } else {
        L.circle([markers[i].lat, markers[i].lon], {
                color: "#0089A7",
                fillOpacity: 0.5,
            })
            .bindPopup('Address: ' + markers[i].address + '<br>' + '  Age: ' + markers[i].years)
            .addTo(map)
    }
};

// var legend = L.control({ position: 'bottomright' });

// var div = L.DomUtil.create('div', 'info legend')

// div.innerHTML = "< svg height = '120', width = '200'><circle cx = ‘30‘cy = ’95’r = ‘15’style = ‘fill:blue’ > < /circle> <text x = ‘70’y = ‘102’style = ‘font-size:16px’ > Less than 30 years < /text> </svg>"
// legend.onAdd = function(map) {
//     return div;
// };
// legend.addTo(map);