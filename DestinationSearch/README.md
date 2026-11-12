# DestinationSearch

## Description
A destination search application that allows users to filter through a list of 12 travel destinations by name using a search input.

## Features
- Search/filter destinations in real-time
- Display destination images and names
- 12 predefined destinations with images
- Responsive grid layout
- Empty state handling (shows all when search is empty)

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd DestinationSearch
npm install
npm run dev
```

## Project Structure
```
DestinationSearch/
├── public/
├── src/
│   ├── components/
│   │   ├── DestinationSearch.jsx
│   │   ├── DestinationItem.jsx
│   │   └── index.css
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
- Controlled input component
- Array filtering for search functionality
- Component composition (parent-child)
- Array mapping for list rendering
- Conditional rendering