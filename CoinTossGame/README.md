# CoinTossGame

## Description
A simple coin toss game that simulates flipping a coin. Tracks total tosses, heads count, and tails count with visual feedback.

## Features
- Random coin toss (Heads/Tails)
- Visual coin image changes based on result
- Running statistics: Total tosses, Heads count, Tails count
- Clean card-based UI

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd CoinTossGame
npm install
npm run dev
```

## Project Structure
```
CoinTossGame/
├── public/
├── src/
│   ├── components/
│   │   └── CoinToss/
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
- Math.random() for randomness
- Functional state updates with multiple state variables
- Conditional rendering for coin image
- Event handling (onClick)
- Statistics tracking