var map = L.map('map', {
    center: [
        22.339742, 114.159926
    ],
    zoom: 10.5
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
                radius: 30
            })
            .bindPopup('Address: ' + markers[i].address + '<br>' + '  Age: ' + markers[i].years)
            .addTo(map);
    } else {
        L.circle([markers[i].lat, markers[i].lon], {
                color: "#0089A7",
                fillOpacity: 0.5,
                radius: 30
            })
            .bindPopup('Address: ' + markers[i].address + '<br>' + '  Age: ' + markers[i].years)
            .addTo(map)
    }
};