# Fruitscounter

## Description
A simple counter application tracking how many mangoes and bananas Bob has eaten. Separate buttons for each fruit with individual counters.

## Features
- Two independent counters (Mango and Banana)
- Visual fruit images
- Increment buttons for each fruit
- Combined display showing both counts

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd Fruitscounter
npm install
npm run dev
```

## Project Structure
```
Fruitscounter/
├── public/
├── src/
│   ├── components/
│   │   └── FruitsCounter.jsx
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
- Class component state with multiple properties
- Independent state updates for each counter
- Event handlers for each button
- External image URLs
- Simple state management