# FoodieHub

## Description
A food menu browser for exploring 50 dishes by category and searching for dishes by name.

## Features
- Browse Chicken, Pasta, Vegetarian, Indian, and Asian dishes, or select All to see the full menu
- Search for dishes by name as you type within the selected category
- See a "No items found" message when the search returns no results
- View dish names, prices, and images from TheMealDB on reusable food cards
- Add to cart and Explore More buttons, plus favorites and cart icons, are UI placeholders

## Tech Stack
- React (Vite)
- Class Components
- CSS
- Lucide React

## How to Run
```bash
cd FoodieHub
npm install
npm run dev
```

## Project Structure
```
FoodieHub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CategoryFilter/
│   │   ├── FoodCard/
│   │   ├── Footer/
│   │   ├── HeroSection/
│   │   └── Navbar/
│   ├── FoodieHub/
│   │   ├── index.jsx
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
- Class component state for the selected category and visible dishes
- Props and callbacks for category selection and search input
- Array filtering by category and dish name
- List rendering with reusable food cards
- Conditional rendering for empty search results
