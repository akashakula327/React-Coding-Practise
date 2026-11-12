# CapitalsApp

## Description
An interactive application to learn countries and their capitals. Select a capital from a dropdown to see which country it belongs to.

## Features
- Dropdown selection of capital cities
- Real-time display of corresponding country
- Pre-defined list of 5 country-capital pairs
- Clean card-based UI

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd CapitalsApp
npm install
npm run dev
```

## Project Structure
```
CapitalsApp/
├── public/
├── src/
│   ├── components/
│   │   └── Capitals/
│   │       ├── index.jsx
│   │       └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Concepts
- Class component state management
- Controlled select element
- Array filtering for data lookup
- Event handling (onChange)
- Conditional rendering