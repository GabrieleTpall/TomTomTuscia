import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const tileUrl = import.meta.env.VITE_MAP_TILE_URL || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export default function MapPage() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get('/api/tracks').then(res => setTracks(res.data)).catch(() => setTracks([]));
  }, []);

  return (
    <MapContainer center={[42.53, 12.13]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url={tileUrl} />
      {tracks.map(track => (
        <React.Fragment key={track.id}>
          {track.coordinates && (
            <Polyline positions={track.coordinates.map(c => [c.lat, c.lng])}>
              <Popup>
                <div>
                  <h3>{track.name}</h3>
                  <p>{track.description}</p>
                  <a href={`/api/tracks/${track.id}/gpx`}>Scarica GPX</a>
                </div>
              </Popup>
            </Polyline>
          )}
          {track.coordinates && (
            <Marker position={[track.coordinates[0].lat, track.coordinates[0].lng]}>
              <Popup>
                <div>
                  <h3>{track.name}</h3>
                  <p>{track.description}</p>
                  <a href={`/api/tracks/${track.id}/gpx`}>Scarica GPX</a>
                </div>
              </Popup>
            </Marker>
          )}
        </React.Fragment>
      ))}
    </MapContainer>
  );
}
