# EvenOddApp

## Description
An application that generates random numbers and determines if the cumulative count is even or odd.

## Features
- Generates random number (0-100) on each increment
- Displays current count
- Shows whether count is Even or Odd
- Visual feedback with card-based UI

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd EvenOddApp
npm install
npm run dev
```

## Project Structure
```
EvenOddApp/
├── public/
├── src/
│   ├── components/
│   │   └── EvenOddApp.jsx
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
- Modulo operator for even/odd determination
- Conditional rendering based on calculation
- Event handling