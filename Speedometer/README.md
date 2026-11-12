# Speedometer

## Description
A speedometer simulation with accelerate and brake controls. Speed ranges from 0-200 km/h with visual speedometer image and real-time speed display.

## Features
- Accelerate button (+10 km/h, max 200)
- Brake button (-10 km/h, min 0)
- Real-time speed display
- Visual speedometer image
- Min/max speed indicators

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd Speedometer
npm install
npm run dev
```

## Project Structure
```
Speedometer/
├── public/
├── src/
│   ├── components/
│   │   └── Speedometer.jsx
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
- Conditional state updates (bounds checking)
- Functional state updates
- External image rendering
- Event handling with constraints
- Real-time UI updates