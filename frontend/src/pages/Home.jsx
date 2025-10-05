import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const featuredListings = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "Premium quality wireless headphones with noise cancellation",
      price: "$99.99",
      image: "🎧"
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Fitness tracking smart watch with heart rate monitor",
      price: "$199.99",
      image: "⌚"
    },
    {
      id: 3,
      title: "Laptop Stand",
      description: "Adjustable aluminum laptop stand for better ergonomics",
      price: "$49.99",
      image: "💻"
    },
    {
      id: 4,
      title: "Coffee Maker",
      description: "Automatic coffee maker with programmable timer",
      price: "$79.99",
      image: "☕"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to ShopEase</h1>
          <p className="hero-subtitle">
            Discover amazing products from sellers around the world. 
            Buy what you love or sell what you create.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/listings" className="btn btn-primary">
              Browse Listings
            </Link>
            <Link to="/create-listing" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Start Selling
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="page-section">
        <div className="container">
          <h2 className="section-title">Featured Listings</h2>
          <div className="grid grid-4">
            {featuredListings.map(listing => (
              <div key={listing.id} className="card">
                <div className="product-image">
                  {listing.image}
                </div>
                <div className="card-body">
                  <h3 className="card-title">{listing.title}</h3>
                  <p className="card-text">{listing.description}</p>
                  <div className="card-price">{listing.price}</div>
                  <Link to={`/listing/${listing.id}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="page-section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">Why Choose ShopEase?</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                <h3 className="card-title">Secure Payments</h3>
                <p className="card-text">
                  Your transactions are protected with industry-standard encryption and secure payment processing.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
                <h3 className="card-title">Fast Shipping</h3>
                <p className="card-text">
                  Get your items delivered quickly with our network of trusted shipping partners worldwide.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                <h3 className="card-title">24/7 Support</h3>
                <p className="card-text">
                  Our customer support team is always here to help you with any questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to Get Started?</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#64748b' }}>
            Join thousands of satisfied customers and sellers on our platform.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/signup" className="btn btn-primary">
              Create Account
            </Link>
            <Link to="/listings" className="btn btn-secondary">
              Explore Listings
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
