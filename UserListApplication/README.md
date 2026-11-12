# UserListApplication

## Description
A user management application displaying 4 users with search and delete functionality. Users can search by name and delete individual users.

## Features
- Display 4 users with avatars, names, roles
- Real-time search filtering by name
- Delete individual users
- Reusable UserProfile component
- Clean list layout

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd UserListApplication
npm install
npm run dev
```

## Project Structure
```
UserListApplication/
├── public/
├── src/
│   ├── components/
│   │   ├── List.jsx
│   │   └── UserProfile.jsx
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
- Controlled search input
- Array filtering for search
- Array filtering for deletion
- Component composition
- Callback props for delete action
- Unique IDs for list keys