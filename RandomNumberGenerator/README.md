# RandomNumberGenerator

## Description
A simple random number generator that produces a random number between 0 and 100 on button click.

## Features
- Generate random number (0-100)
- Display current random number
- Clean card-based UI
- Simple one-button interaction

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd RandomNumberGenerator
npm install
npm run dev
```

## Project Structure
```
RandomNumberGenerator/
├── public/
├── src/
│   ├── components/
│   │   └── RandomNumberCard.jsx
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
- Math.random() for random number generation
- Math.ceil() for integer rounding
- Event handling (onClick)
- Simple state updates