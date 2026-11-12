# ProjectsApplication

## Description
A project portfolio application with tabbed navigation (Static, Responsive, Dynamic) filtering 11 projects across three categories. Built with class components.

## Features
- Three category tabs: Static, Responsive, Dynamic
- 11 projects with images, titles, and descriptions
- Tab switching with active state
- Project filtering by category
- Header component
- Responsive card grid layout

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd ProjectsApplication
npm install
npm run dev
```

## Project Structure
```
ProjectsApplication/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── index.jsx
│   │   ├── ProjectItem/
│   │   │   └── index.jsx
│   │   └── TabItem/
│   │       └── index.jsx
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
- Tab-based navigation
- Array filtering for category selection
- Component composition (Header, TabItem, ProjectItem)
- Event handling with callbacks
- Complex state with multiple data arrays
- Key usage in list rendering