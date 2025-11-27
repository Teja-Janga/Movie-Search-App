# Movie Search App

## 🎬 Live Demo

👉 **[View Live Demo](https://teja-janga.github.io/Movie-Search-App/)**

## Overview

Movie Search App is a responsive web application built with React and Vite that allows users to search for movies, view detailed information, and save their favorite movies. The app uses the OMDB API to fetch real-time movie data.

## Features

✨ **Core Features:**
- 🔍 Search movies by title
- 📺 View detailed movie information (plot, cast, ratings, runtime, etc.)
- ⭐ Add/remove movies from favorites
- 💾 Persistent favorites using browser localStorage
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Vite and React
- 🎨 Clean and intuitive UI
- 📄 Pagination support for search results
- ⏳ Loading states and error handling
- 🖼️ Placeholder images for movies without posters

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS (Custom)
- **API:** OMDB (Open Movie Database)
- **Storage:** Browser LocalStorage
- **Deployment:** GitHub Pages

## Project Structure

```
Movie-Search-App/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Header.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── docs/
│   └── (GitHub Pages deployment)
├── package.json
└── vite.config.js
```

## Environment Setup

The app uses the OMDB API. To use your own API key:
1. Get a free API key from [OMDB API](http://www.omdbapi.com/)
2. Update the API endpoint in the component files

## Usage

1. **Search Movies:** Enter a movie title in the search bar
2. **View Details:** Click on any movie to see full details
3. **Save Favorites:** Click the star icon to add movies to your favorites
4. **Browse Favorites:** Access your saved movies anytime (stored locally)
5. **Navigate:** Use pagination to browse through search results

## Features in Detail

### Search Functionality
- Real-time search powered by OMDB API
- Pagination to handle multiple results
- Loading states while fetching data
- Error handling for failed requests

### Movie Details
- Full movie information including plot, cast, runtime, year, rating
- High-quality poster images with fallback placeholders
- Add/remove from favorites directly from details page

### Favorites
- Persistent storage using browser localStorage
- Access saved movies even after closing the browser
- Quick add/remove functionality

## Deployment

The app is deployed on GitHub Pages and served from the `docs` folder. Any changes pushed to the `main` branch automatically update the live site.

## Future Enhancements

- 🎯 Advanced filtering (by year, genre, rating)
- 🌙 Dark mode toggle
- 📊 Movie statistics and trends
- 🔗 Social sharing features
- 💬 User reviews and ratings

## License

This project is open source and available under the MIT License.

## Author

**Teja Janga**
- GitHub: [@Teja-Janga](https://github.com/Teja-Janga)

## Acknowledgments

- OMDB API for movie data
- React and Vite communities

---

**Made with ❤️ by Teja Janga**
