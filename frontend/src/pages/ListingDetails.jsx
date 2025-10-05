import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ListingDetails = () => {
  const { id } = useParams()
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock listing data - in a real app, this would come from an API
  const mockListings = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "Premium quality wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers, gamers, and professionals who need crystal-clear audio quality. Features include Bluetooth 5.0 connectivity, quick charge capability, and comfortable over-ear design.",
      price: 99.99,
      category: "electronics",
      condition: "excellent",
      location: "New York, NY",
      datePosted: "2024-01-15",
      seller: {
        name: "TechGear Pro",
        email: "contact@techgearpro.com",
        phone: "(555) 123-4567",
        rating: 4.8,
        totalSales: 1247,
        memberSince: "2020-03-15"
      },
      images: ["🎧", "📱", "🔋"],
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "Bluetooth 5.0",
        "Quick charge (10 min = 3 hours)",
        "Comfortable over-ear design",
        "Premium sound quality"
      ],
      specifications: {
        "Battery Life": "30 hours",
        "Connectivity": "Bluetooth 5.0",
        "Weight": "250g",
        "Charging Time": "2 hours",
        "Range": "30 feet",
        "Compatibility": "All Bluetooth devices"
      }
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Advanced fitness tracking smart watch with heart rate monitor, GPS, and water resistance. Perfect for athletes and fitness enthusiasts. Tracks steps, calories, sleep, and provides smartphone notifications. Features a bright OLED display and customizable watch faces.",
      price: 199.99,
      category: "electronics",
      condition: "like-new",
      location: "San Francisco, CA",
      datePosted: "2024-01-14",
      seller: {
        name: "WearableTech",
        email: "sales@wearabletech.com",
        phone: "(555) 987-6543",
        rating: 4.9,
        totalSales: 892,
        memberSince: "2019-08-22"
      },
      images: ["⌚", "❤️", "🏃"],
      features: [
        "Heart rate monitoring",
        "GPS tracking",
        "Water resistant (50m)",
        "7-day battery life",
        "Sleep tracking",
        "Smartphone notifications"
      ],
      specifications: {
        "Display": "1.4\" OLED",
        "Battery Life": "7 days",
        "Water Resistance": "50 meters",
        "Sensors": "Heart rate, GPS, Accelerometer",
        "Compatibility": "iOS & Android",
        "Weight": "45g"
      }
    },
    {
      id: 3,
      title: "Vintage Leather Jacket",
      description: "Authentic vintage leather jacket from the 1980s in excellent condition. Made from genuine cowhide leather with a classic biker style. Features multiple pockets, zippered cuffs, and a comfortable fit. Perfect for collectors or anyone who appreciates quality vintage fashion.",
      price: 149.99,
      category: "clothing",
      condition: "excellent",
      location: "Los Angeles, CA",
      datePosted: "2024-01-13",
      seller: {
        name: "Vintage Finds",
        email: "info@vintagefinds.com",
        phone: "(555) 456-7890",
        rating: 4.7,
        totalSales: 634,
        memberSince: "2018-11-05"
      },
      images: ["🧥", "👕", "🔗"],
      features: [
        "Genuine cowhide leather",
        "Classic biker style",
        "Multiple pockets",
        "Zippered cuffs",
        "Vintage 1980s",
        "Excellent condition"
      ],
      specifications: {
        "Material": "Genuine cowhide leather",
        "Size": "Large",
        "Color": "Black",
        "Style": "Biker jacket",
        "Era": "1980s",
        "Condition": "Excellent"
      }
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundListing = mockListings.find(p => p.id === parseInt(id))
      setListing(foundListing)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="page-section">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
            <h2>Loading listing details...</h2>
          </div>
        </div>
      </div>
    )
  }

  if (!listing) {
    return (
      <div className="page-section">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❌</div>
            <h2>Listing Not Found</h2>
            <p style={{ marginBottom: '2rem', color: '#64748b' }}>
              The listing you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/listings" className="btn btn-primary">
              Browse All Listings
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const conditionLabels = {
    'new': 'New',
    'like-new': 'Like New',
    'excellent': 'Excellent',
    'good': 'Good',
    'fair': 'Fair',
    'poor': 'Poor'
  }

  return (
    <div className="page-section">
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/listings" style={{ color: '#3b82f6', textDecoration: 'none' }}>
            ← Back to Listings
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Listing Images */}
          <div>
            <div style={{ 
              aspectRatio: '1', 
              backgroundColor: '#f1f5f9', 
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem',
              marginBottom: '1rem',
              border: '2px solid #e5e7eb'
            }}>
              {listing.images[selectedImage]}
            </div>
            
            {/* Image Thumbnails */}
            {listing.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {listing.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#f1f5f9',
                      border: selectedImage === index ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {image}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Listing Information */}
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1e293b' }}>
              {listing.title}
            </h1>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold', 
                color: '#059669',
                marginRight: '1rem'
              }}>
                ${listing.price.toFixed(2)}
              </span>
              <span style={{
                backgroundColor: '#dbeafe',
                color: '#1e40af',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {conditionLabels[listing.condition]}
              </span>
            </div>

            <div style={{ marginBottom: '2rem', color: '#64748b' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Location:</strong> {listing.location}
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Category:</strong> {listing.category.charAt(0).toUpperCase() + listing.category.slice(1)}
              </p>
              <p>
                <strong>Posted:</strong> {new Date(listing.datePosted).toLocaleDateString()}
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Description</h3>
              <p style={{ lineHeight: '1.7', color: '#475569' }}>
                {listing.description}
              </p>
            </div>

            {/* Features */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Key Features</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {listing.features.map((feature, index) => (
                  <li key={index} style={{ 
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: '#059669' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Seller Button */}
            <button 
              className="btn btn-primary"
              style={{ 
                width: '100%',
                padding: '1rem',
                fontSize: '1.125rem',
                marginBottom: '2rem'
              }}
              onClick={() => alert('Contact functionality would be implemented here!')}
            >
              Contact Seller
            </button>
          </div>
        </div>

        {/* Specifications */}
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ marginBottom: '2rem', color: '#1e293b' }}>Specifications</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem' 
          }}>
            {Object.entries(listing.specifications).map(([key, value]) => (
              <div key={key} style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>
                  {key}
                </div>
                <div style={{ color: '#64748b' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seller Information */}
        <div style={{ 
          marginTop: '3rem', 
          backgroundColor: '#f8fafc', 
          padding: '2rem', 
          borderRadius: '1rem',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ marginBottom: '2rem', color: '#1e293b' }}>Seller Information</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>{listing.seller.name}</h3>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#f59e0b' }}>⭐</span>
                  <span style={{ fontWeight: '600' }}>{listing.seller.rating}/5.0</span>
                  <span style={{ color: '#64748b' }}>({listing.seller.totalSales} sales)</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                  Member since {new Date(listing.seller.memberSince).toLocaleDateString()}
                </p>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Email:</strong> {listing.seller.email}
                </p>
                <p>
                  <strong>Phone:</strong> {listing.seller.phone}
                </p>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '1rem', color: '#1e293b' }}>Contact Seller</h4>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Have questions about this listing? Contact the seller directly using the information above or click the "Contact Seller" button.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => alert(`Email: ${listing.seller.email}`)}
                >
                  Send Email
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => alert(`Phone: ${listing.seller.phone}`)}
                >
                  Call Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingDetails
