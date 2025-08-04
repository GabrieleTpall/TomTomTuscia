# TomTomTuscia

Applicazione per visualizzare e scaricare percorsi GPS.

## Backend API

```
cd server
npm install
npm start
```

Rotte disponibili:

- `GET /api/tracks` elenco percorsi.
- `GET /api/tracks/:id` dettagli percorso.
- `GET /api/tracks/:id/gpx` download file GPX.

## Frontend

```
cd frontend
cp .env.example .env  # configurare eventuale chiave provider mappe
npm install
npm run dev
```

La pagina `MapPage.jsx` mostra la mappa con marker e polilinee dei percorsi.

## Requisiti

- Node.js >= 18
- Connessione internet per scaricare dipendenze e tile della mappa
