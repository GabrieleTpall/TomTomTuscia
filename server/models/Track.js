const path = require('path');

const tracks = [
  {
    id: 1,
    name: 'Infernaccio',
    description: 'Percorso Infernaccio',
    coordinates: [
      { lat: 42.531835455447435, lng: 12.126728966832161 },
      { lat: 42.527339234948158, lng: 12.131156958639622 }
    ],
    gpxPath: path.join(__dirname, '..', '..', 'Infernaccio.gpx.gpx')
  }
];

module.exports = { tracks };
