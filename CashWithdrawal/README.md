# CashWithdrawal

## Description
An ATM-style cash withdrawal simulator with denomination buttons. Users can withdraw money in predefined denominations (50, 100, 200, 500) until balance reaches zero.

## Features
- Initial balance of 2000 rupees
- Four denomination buttons (50, 100, 200, 500)
- Real-time balance updates
- Prevents withdrawal when balance is insufficient
- User profile display

## Tech Stack
- React (Vite)
- Class Components
- CSS

## How to Run
```bash
cd CashWithdrawal
npm install
npm run dev
```

## Project Structure
```
CashWithdrawal/
├── public/
├── src/
│   ├── components/
│   │   ├── CashWithdrawalCard/
│   │   │   ├── CashWithdrawalCard.jsx
│   │   │   └── index.css
│   │   └── DenominationCard/
│   │       ├── DenominationCard.jsx
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
- Functional state updates (prevState)
- Component composition (parent-child)
- Event handling with parameters
- Conditional logic for balance validation
- Array mapping for dynamic buttons