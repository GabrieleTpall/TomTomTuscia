const fs = require('fs');
const path = require('path');
const togpx = require('togpx');
const { tracks } = require('../models/Track');

function listTracks(req, res) {
  res.json(tracks);
}

function getTrack(req, res) {
  const id = parseInt(req.params.id, 10);
  const track = tracks.find(t => t.id === id);
  if (!track) {
    return res.status(404).json({ error: 'Track not found' });
  }
  res.json(track);
}

function downloadGpx(req, res) {
  const id = parseInt(req.params.id, 10);
  const track = tracks.find(t => t.id === id);
  if (!track) {
    return res.status(404).json({ error: 'Track not found' });
  }
  if (track.gpxPath && fs.existsSync(track.gpxPath)) {
    return res.download(track.gpxPath);
  }
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: track.coordinates.map(c => [c.lng, c.lat])
        },
        properties: {}
      }
    ]
  };
  const xml = togpx(geojson);
  res.header('Content-Type', 'application/gpx+xml');
  res.attachment(`${track.name}.gpx`);
  res.send(xml);
}

module.exports = { listTracks, getTrack, downloadGpx };
