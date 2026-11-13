# ReviewsApp

## Description
An interactive user reviews carousel application that allows users to navigate through testimonials using left and right arrow buttons.

## Features
- Carousel navigation with left and right arrow buttons
- Display reviewer profile image, name, company name, and review description
- Boundary checks to prevent index out of bounds
- Clean card-based UI with responsive layout

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd ReviewsApp
npm install
npm run dev
```

## Project Structure
```
ReviewsApp/
├── public/
├── src/
│   ├── components/
│   │   └── ReviewsCarousel/
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
- Class component state management (`count` index)
- Event handling for navigation (`onLeftArrow`, `onRightArrow`)
- Array indexing and data extraction from props
- Conditional bounds checking for state updates
- Component styling and layout