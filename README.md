# 🎬 Biscope TV

A modern movie discovery app built with React, powered by the TMDB API. Browse now-playing movies, search for any title, and dive into detailed movie info including cast, trailer, budget, and more.

---

## ✨ Features

- 🎥 Browse **now playing** movies from TMDB
- 🔍 **Search** any movie by title
- 📄 **Detailed movie page** with:
  - Runtime, genres, status, tagline
  - Rating, votes, budget, revenue
  - Director & top cast
  - Production countries, languages, companies
  - YouTube trailer link
- 🖼️ **Fallback image** for movies without a poster
- 📱 Fully **responsive** layout
- ⚡ Fast and clean UI with equal-height movie cards

---

## 🛠️ Tech Stack

| Technology                                               | Usage            |
| -------------------------------------------------------- | ---------------- |
| [React](https://reactjs.org/)                            | UI Framework     |
| [Vite](https://vitejs.dev/)                              | Build Tool       |
| [Tailwind CSS](https://tailwindcss.com/)                 | Styling          |
| [Flowbite React](https://flowbite-react.com/)            | UI Components    |
| [Redux](https://redux.js.org/)                           | State Management |
| [React Router](https://reactrouter.com/)                 | Routing          |
| [TMDB API](https://www.themoviedb.org/documentation/api) | Movie Data       |
| [Font Awesome](https://fontawesome.com/)                 | Icons            |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# Clone the repo
git clone https://github.com/LonYarHao/Movie_Project-BiscopeTV-.git

# Go into the project folder
cd Movie_Project-BiscopeTV-

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Environment Setup

Create a file called `api/index.js` (or wherever your api config is) and add your TMDB API key:

```js
import axios from "axios";

export const api_key = "YOUR_TMDB_API_KEY";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
```

---

## 📁 Project Structure

```
src/
├── api/
│   └── index.js              # Axios instance + API key
├── components/
│   ├── Header.jsx            # Navbar + search
│   ├── Home.jsx              # Home page
│   ├── Movies.jsx            # Movie grid
│   ├── MovieCard.jsx         # Individual movie card
│   ├── Details.jsx           # Movie detail page
│   ├── FooterBottom.jsx      # Footer
│   └── ErrorPage.jsx         # 404 page
├── redux/
│   ├── action-type.js
│   ├── action/movies/        # Redux actions
│   ├── reducer/movie/        # Movie reducer
│   └── store/                # Redux store
├── App.jsx
└── main.jsx
```

---

## 📸 Screenshots

![Home View ](./public/screenshot/Screenshot%202026-04-01%20122835.png)

---

## 📝 License

This project is for personal/educational use.

---

Made with ❤️ by [LonYarHao](https://github.com/LonYarHao)
