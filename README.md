# ID Card Generator

A simple and reusable **ID Card Generator** built with **React + Vite + Tailwind CSS**.
This project demonstrates React fundamentals such as component reusability, props, JSX, and clean project structure.

---

## Tech used
* React
* Vite
* Tailwind CSS

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── Card.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

* **IdCard.jsx** → Reusable presentational component
* **App.jsx** → Parent component that renders multiple ID cards
* **index.css** → Tailwind CSS imports

---

## Features

* Reusable `IdCard` component
* Props-based data passing
* Multiple cards rendered from a single component
* Clean and responsive UI using Tailwind CSS
* Proper project folder organization

---

## Concepts Demonstrated

* JSX
* Functional Components
* Props
* Component Reusability
* Basic Layout Styling with Tailwind

---

## Installation & Setup

1. Clone the repository

```
git clone <your-repo-link>
cd id-card-generator
```

2. Install dependencies

```
npm install
```

3. Run development server

```
npm run dev
```

---

## How It Works

The `IdCard` component receives the following props:

* `id`
* `name`
* `role`
* `department`
* `avatar`

The `App` component imports `IdCard` and reuses it multiple times with different user information.

---

## Author

Cynthy
