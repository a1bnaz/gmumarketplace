# E-Commerce SPA

A modern, responsive Single Page Application built with React and Vite for an e-commerce marketplace.

## Features

- **Home Page**: Hero section with featured products and company information
- **Login Page**: User authentication with form validation
- **Signup Page**: User registration with comprehensive form validation
- **Listings Page**: Browse products with search, filtering, and sorting capabilities
- **Create Listing Page**: Comprehensive form for sellers to create product listings

## Technologies Used

- React 18
- React Router DOM for navigation
- Vite for fast development and building
- Modern CSS with responsive design
- Form validation and error handling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Listings.jsx
│   │   └── CreateListing.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features Overview

### Home Page
- Attractive hero section with call-to-action buttons
- Featured products showcase
- Company features and benefits
- Responsive design for all devices

### Authentication
- **Login**: Email/password authentication with validation
- **Signup**: Complete registration form with terms acceptance
- Real-time form validation and error messages

### Product Management
- **Listings Page**: 
  - Search functionality
  - Category filtering
  - Price and date sorting
  - Responsive product grid
- **Create Listing**: 
  - Comprehensive product form
  - Image upload capability
  - Category and condition selection
  - Contact information

### Design Features
- Modern, clean UI with consistent styling
- Responsive design that works on all screen sizes
- Smooth hover effects and transitions
- Professional color scheme
- Accessible form elements

## Customization

The application is built with modularity in mind. You can easily:

- Modify colors and styling in `src/index.css`
- Add new pages by creating components in `src/pages/`
- Extend the navigation in `src/components/Navbar.jsx`
- Add new routes in `src/App.jsx`

## Future Enhancements

Consider adding:
- User authentication backend integration
- Product detail pages
- Shopping cart functionality
- User dashboard
- Payment integration
- Real-time notifications
- Image optimization
- Search API integration

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)