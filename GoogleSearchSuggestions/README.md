# GoogleSearchSuggestions

## Description
A Google-style search autocomplete component that filters through 50+ programming-related search suggestions as you type.

## Features
- Real-time search filtering (shows top 6 matches)
- Google-like UI with logo and search icon
- 50 predefined MERN stack development suggestions
- Case-insensitive search
- Clean, minimal interface

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd GoogleSearchSuggestions
npm install
npm run dev
```

## Project Structure
```
GoogleSearchSuggestions/
├── public/
├── src/
│   ├── components/
│   │   ├── GoogleSuggestions/
│   │   │   ├── GoogleSuggestions.jsx
│   │   │   └── index.css
│   │   └── SuggestionItem/
│   │       ├── SuggestionItem.jsx
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
- Controlled input component
- Array filtering for autocomplete
- Slice method for limiting results
- Component composition
- External image assets