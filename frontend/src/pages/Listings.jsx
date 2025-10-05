import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const listings = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "Premium quality wireless headphones with noise cancellation and 30-hour battery life",
      price: 99.99,
      category: "electronics",
      image: "🎧",
      seller: "TechGear Pro",
      datePosted: "2024-01-15"
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Fitness tracking smart watch with heart rate monitor and GPS",
      price: 199.99,
      category: "electronics",
      image: "⌚",
      seller: "WearableTech",
      datePosted: "2024-01-14"
    },
    {
      id: 3,
      title: "Vintage Leather Jacket",
      description: "Authentic vintage leather jacket in excellent condition",
      price: 149.99,
      category: "clothing",
      image: "🧥",
      seller: "Vintage Finds",
      datePosted: "2024-01-13"
    },
    {
      id: 4,
      title: "Coffee Maker",
      description: "Automatic coffee maker with programmable timer and thermal carafe",
      price: 79.99,
      category: "home",
      image: "☕",
      seller: "Kitchen Essentials",
      datePosted: "2024-01-12"
    },
    {
      id: 5,
      title: "Laptop Stand",
      description: "Adjustable aluminum laptop stand for better ergonomics",
      price: 49.99,
      category: "electronics",
      image: "💻",
      seller: "Office Solutions",
      datePosted: "2024-01-11"
    },
    {
      id: 6,
      title: "Running Shoes",
      description: "Lightweight running shoes with cushioned sole for long-distance running",
      price: 89.99,
      category: "sports",
      image: "👟",
      seller: "Sports Direct",
      datePosted: "2024-01-10"
    },
    {
      id: 7,
      title: "Art Deco Lamp",
      description: "Beautiful vintage Art Deco table lamp with brass finish",
      price: 125.99,
      category: "home",
      image: "🕯️",
      seller: "Antique Treasures",
      datePosted: "2024-01-09"
    },
    {
      id: 8,
      title: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with 360-degree sound and waterproof design",
      price: 69.99,
      category: "electronics",
      image: "🔊",
      seller: "Audio Plus",
      datePosted: "2024-01-08"
    }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'sports', label: 'Sports & Outdoors' },
    { value: 'books', label: 'Books & Media' }
  ]

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || listing.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return new Date(b.datePosted) - new Date(a.datePosted)
      case 'oldest':
        return new Date(a.datePosted) - new Date(b.datePosted)
      default:
        return 0
    }
  })

  return (
    <div className="page-section">
      <div className="container">
          <h1 className="section-title">Browse Listings</h1>
        
        {/* Filters */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem', 
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <input
              type="text"
              placeholder="Search listings..."
              className="form-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="form-input"
            style={{ width: 'auto', minWidth: '150px' }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          
          <select
            className="form-input"
            style={{ width: 'auto', minWidth: '150px' }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Results count */}
        <p style={{ marginBottom: '2rem', color: '#64748b' }}>
          Showing {sortedListings.length} listing{sortedListings.length !== 1 ? 's' : ''}
        </p>

        {/* Listings Grid */}
        {sortedListings.length > 0 ? (
          <div className="listing-grid">
            {sortedListings.map(listing => (
              <div key={listing.id} className="listing-card">
                <div className="listing-image">
                  {listing.image}
                </div>
                <div className="listing-info">
                  <h3 className="listing-title">{listing.title}</h3>
                  <p className="listing-description">{listing.description}</p>
                  <div className="listing-price">${listing.price.toFixed(2)}</div>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    color: '#64748b', 
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <span>by {listing.seller}</span>
                    <span>{new Date(listing.datePosted).toLocaleDateString()}</span>
                  </div>
                  <Link to={`/listing/${listing.id}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem', 
            color: '#64748b' 
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3>No listings found</h3>
            <p>Try adjusting your search criteria or browse all categories.</p>
          </div>
        )}

        {/* Quick Stats */}
        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '0.75rem',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>ShopEase Marketplace</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>
                {listings.length}+
              </div>
              <div style={{ color: '#64748b' }}>Active Listings</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669' }}>
                100+
              </div>
              <div style={{ color: '#64748b' }}>Happy Sellers</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#dc2626' }}>
                500+
              </div>
              <div style={{ color: '#64748b' }}>Satisfied Buyers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listings
