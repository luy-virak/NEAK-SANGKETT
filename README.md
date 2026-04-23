# Neak Sangkett Cinematic Archive

A modern, responsive website for exploring movies, TV shows, ratings, reviews, and entertainment news. Built with HTML5, CSS3, and vanilla JavaScript.

![Neak Sangkett Screenshot](assets/screenshot.png) <!-- You can add a screenshot here -->

## Features

- **Movie Discovery**: Browse featured movies, top-rated films, and upcoming releases
- **Detailed Movie Pages**: View comprehensive information about each movie including cast, technical specs, and reviews
- **Advanced Search & Filtering**: Search by title and filter results by year, rating, studio, and genre
- **Entertainment News**: Stay updated with curated editorial content and industry news
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **Interactive UI**: Smooth animations, interactive filters, and mobile-friendly navigation

## Project Structure

```
neak-sangkett-detail/
├── index.html          # Main homepage
├── movie-detail.html   # Movie detail template
├── script.js           # Main JavaScript functionality
├── movie-detail.js     # Movie detail page JavaScript
├── styles.css          # Stylesheet
├── assets/             # Images and media files
└── README.md           # This file
```

## Key Components

### Homepage (index.html)
- Hero section with featured content
- Top Rated Today section showcasing popular movies
- Upcoming Releases carousel
- Movie News section with latest industry updates
- Archive section for browsing and searching the movie database

### Movie Detail Page (movie-detail.html)
- Detailed movie poster and backdrop
- Technical specifications
- Cast and crew information
- Editorial perspectives and reviews
- Trivia and did-you-know facts
- Watchlist and rating functionality

### JavaScript Functionality (script.js)
- Mobile navigation menu toggle
- Release carousel scrolling
- Genre filtering system
- Search functionality with live results
- Archive filtering (year, rating, studio, genres)
- Responsive behavior adjustments
- Accessibility features (ARIA labels, keyboard navigation)

## Design & Typography

- **Font**: Inter (Google Fonts) for clean, modern readability
- **Color Scheme**: Dark theme with accent colors for visual hierarchy
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Icons**: Unicode characters for lightweight icons (search, menu, etc.)

## Browser Support

This website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required - pure HTML/CSS/JS

## Customization

### Adding New Movies
To add new movies to the archive:
1. Add movie data to the results list in `index.html`
2. Create corresponding assets (posters, images) in the `assets/` folder
3. Update filtering data attributes as needed

### Modifying Styles
All styling is contained in `styles.css`. Modify variables and rules to change:
- Color scheme
- Typography
- Layout breakpoints
- Component styles

### Extending Functionality
JavaScript is modular and well-commented:
- `script.js`: Main site functionality
- `movie-detail.js`: Detail page specific functions
- Easy to extend with additional features

## Development

This project uses vanilla web technologies with no build tools or frameworks:
- HTML5 semantic markup
- CSS3 with modern flexbox/grid
- Vanilla JavaScript (ES6+)
- No external dependencies

## Future Enhancements

Potential features for future versions:
- User authentication and personalized watchlists
- Movie rating and review system
- Dark/light theme toggle
- Improved search with autocomplete
- Category-based browsing (by genre, year, etc.)
- Integration with movie APIs (TMDB, OMDB)
- Progressive Web App (PWA) capabilities

## Credits

- Design & Development: Created for educational/demo purposes
- Images: Placeholder and generated images used for demonstration
- Font: Inter by Rasmus Andersson (via Google Fonts)

## License

This project is open source and available for personal and educational use.

---

*Neak Sangkett Cinematic Archive - Explore the world of cinema*
