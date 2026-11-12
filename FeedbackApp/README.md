# FeedbackApp

## Description
A customer feedback component with emoji-based rating system. Users can select Sad, None, or Happy emoji to submit feedback, which then shows a thank you message.

## Features
- Three emoji reaction options (Sad, None, Happy)
- Click any emoji to submit feedback
- Toggles to Thank You card after submission
- Visual emoji images for each reaction

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd FeedbackApp
npm install
npm run dev
```

## Project Structure
```
FeedbackApp/
├── public/
├── src/
│   ├── components/
│   │   ├── FeedbackCard/
│   │   │   ├── Feedback.jsx
│   │   │   └── index.css
│   │   └── ThankYouCard/
│   │       ├── ThankYou.jsx
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
- Boolean state toggling
- Conditional rendering (feedback form vs thank you)
- Event handling with state update
- Component composition
- Image rendering from external URLs