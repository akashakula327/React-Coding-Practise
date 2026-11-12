# ListAndKeys

## Description
A user list application demonstrating list rendering with keys, displaying user profiles with avatars, names, and roles.

## Features
- Render list of 4 users with profile images
- Each user shows name and role (Web Developer, Backend Developer, Designer, Tester)
- Reusable UserProfile component
- Proper key usage for list items

## Tech Stack
- React (Vite)
- Functional Components
- CSS

## How to Run
```bash
cd ListAndKeys
npm install
npm run dev
```

## Project Structure
```
ListAndKeys/
├── public/
├── src/
│   ├── components/
│   │   └── UserProfile/
│   │       ├── UserProfile.jsx
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
- Functional components with props
- Array mapping with keys
- Component reusability
- Props destructuring
- External image URLs
- List rendering best practices