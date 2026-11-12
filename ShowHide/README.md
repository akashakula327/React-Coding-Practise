# ShowHide

## Description
A component demonstrating conditional rendering with show/hide functionality for first name and last name independently.

## Features
- Two independent show/hide toggles
- "Show/Hide FirstName" button toggles "John"
- "Show/Hide LastName" button toggles "Calibar"
- Clean card-based display for each name
- Boolean state management for each name

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd ShowHide
npm install
npm run dev
```

## Project Structure
```
ShowHide/
├── public/
├── src/
│   ├── components/
│   │   └── ShowHIde.jsx
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
- Class component state with multiple boolean properties
- Independent state toggles
- Conditional rendering (element vs empty string)
- Event handling for multiple buttons
- Dynamic UI based on state