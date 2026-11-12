# GalleryApp

## Description
A nature photography gallery with a main image display and thumbnail navigation. Click thumbnails to change the main image.

## Features
- Main image display with 8 nature photos
- Thumbnail strip for navigation
- Click thumbnails to update main image
- Photographer credit display
- Responsive gallery layout

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd GalleryApp
npm install
npm run dev
```

## Project Structure
```
GalleryApp/
├── public/
├── src/
│   ├── components/
│   │   ├── GalleryTab/
│   │   │   ├── index.jsx
│   │   │   └── index.css
│   │   └── ThumbnailTab/
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
- Event handling with parameters
- Component composition (parent-child communication)
- Array mapping for thumbnail generation
- Image src manipulation
- Props callback pattern