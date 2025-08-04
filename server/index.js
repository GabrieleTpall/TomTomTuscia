const express = require('express');
const cors = require('cors');
const trackController = require('./controllers/trackController');

const app = express();
app.use(cors());

app.get('/api/tracks', trackController.listTracks);
app.get('/api/tracks/:id', trackController.getTrack);
app.get('/api/tracks/:id/gpx', trackController.downloadGpx);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
