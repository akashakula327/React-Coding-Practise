# BrowserHistory

## Description
A browser history tracker with search functionality, displaying visited websites with timestamps, logos, and domain URLs. Built with class components.

## Features
- Display history items with favicon, title, domain, and time accessed
- Real-time search/filter functionality
- Delete individual history items
- Empty state handling
- Navbar with search input

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd BrowserHistory
npm install
npm run dev
```

## Project Structure
```
BrowserHistory/
├── public/
├── src/
│   ├── components/
│   │   ├── BrowserHistory/
│   │   │   ├── BrowserHistory.jsx
│   │   │   └── index.css
│   │   ├── HistoryItem/
│   │   │   ├── HIstoryItem.jsx
│   │   │   └── index.css
│   │   └── Navbar/
│   │       ├── Navbar.jsx
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
- Controlled components (search input)
- Array filtering for search
- Event handlers (onChange, onClick)
- Conditional rendering
- Component composition
- Prop drilling