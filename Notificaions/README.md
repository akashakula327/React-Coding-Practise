# Notifications

## Description
A notification display component showing four types of notifications (Information, Success, Warning, Error) with distinct colors and icons.

## Features
- Four notification types with color coding
- Blue: Information (#0b69ff)
- Green: Success (#2dca73)
- Yellow: Warning (#ffb800)
- Red: Error (#ff0b37)
- Icon images for each type
- Reusable Notification component

## Tech Stack
- React (Vite)
- Functional Components
- CSS

## How to Run
```bash
cd Notificaions
npm install
npm run dev
```

## Project Structure
```
Notificaions/
├── public/
├── src/
│   ├── components/
│   │   ├── Notifications.jsx
│   │   ├── Notification.jsx
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
- Functional components with props
- Component reusability
- Props for dynamic styling (backgroundcolor, image)
- Color-coded UI patterns
- External icon images