# ResumeMaker

## Description
A resume builder interface with job description input, previous resume input, and updated resume output areas. Includes a generate button for future AI integration.

## Features
- Three text areas: Job Description, Previous Resume, Updated Resume
- Labelled input sections
- Generate button (UI only, no backend logic)
- Two-column layout for inputs, single column for output
- Clean, professional styling

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd ResumeMaker
npm install
npm run dev
```

## Project Structure
```
ResumeMaker/
├── public/
├── src/
│   ├── components/
│   │   └── Resume.jsx
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
- Multiple textarea handling
- Controlled components (onChange)
- Form layout with labels
- Multi-column CSS layout
- Placeholder for AI integration