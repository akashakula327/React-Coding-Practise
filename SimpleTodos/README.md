# SimpleTodos

## Description
A todo list application with 8 predefined MERN stack development tasks. Each todo can be deleted individually.

## Features
- Display 8 predefined development tasks
- Delete individual todos
- Real-time list updates
- Clean, minimal interface
- Task IDs for proper key usage

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd SimpleTodos
npm install
npm run dev
```

## Project Structure
```
SimpleTodos/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchTodo/
│   │   │   ├── SerchTodo.jsx
│   │   │   └── index.css
│   │   └── TodoItem/
│   │       ├── TodoItem.jsx
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
- Array filtering for deletion
- Component composition (parent-child)
- Event handling with parameters (deleteUser callback)
- Unique IDs for list keys
- Functional state updates