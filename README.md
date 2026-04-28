# Catch Design Front-end Test

A static website project built with Pug templating, SCSS (using ITCSS and BEM methodologies), and Gulp for build automation. Includes Jest for testing and BrowserSync for development server.

## Project Structure

```
src/
├── pug/           # Pug templates
├── scss/          # SCSS styles organized by ITCSS
│   ├── settings/  # Variables
│   ├── tools/     # Mixins and functions
│   ├── generic/   # Reset and normalize
│   ├── elements/  # Base element styles
│   ├── objects/   # Layout objects (grid, etc.)
│   ├── components/# Component styles (header, nav, etc.)
│   └── utilities/ # Utility classes
├── js/            # JavaScript files
└── test/          # Jest test files
dist/              # Compiled assets
```

## Features

- **Templating**: Pug for HTML generation
- **Styling**: SCSS with ITCSS architecture and BEM naming convention
- **Build System**: Gulp for compilation and optimization
- **Testing**: Jest for unit tests
- **Development Server**: BrowserSync with live reload
- **Grid System**: CSS Grid-based responsive layout
- **Accessibility**: Semantic HTML and ARIA considerations
- **Cross-browser**: Autoprefixer for vendor prefixes

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd sample-website
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Build the project**:
   ```
   npm run build
   ```

4. **Run tests**:
   ```
   npm test
   ```

5. **Start development server**:
   ```
   npm run dev
   ```
   Open http://localhost:3002 in your browser.

## Available Scripts

- `npm run build`: Compile Pug, SCSS, and JS to dist/
- `npm test`: Run Jest tests
- `npm run dev`: Build and start development server with live reload

## Design Implementation

The page implements a basic layout with:
- Header with logo and navigation
- Hero section
- Grid-based content area
- Footer

Styles follow BEM methodology (e.g., `.header`, `.nav__list`, `.hero__title`).

Grid system uses CSS Grid with responsive breakpoints.

## Technologies Used

- Pug
- SCSS (ITCSS, BEM)
- Gulp
- Jest
- BrowserSync
- NPM for dependency management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Color contrast considerations

For the full design from Figma, the layout has been adapted to a responsive grid system with modern CSS practices.