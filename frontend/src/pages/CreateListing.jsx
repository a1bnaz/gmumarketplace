import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    condition: '',
    location: '',
    contactEmail: '',
    contactPhone: '',
    images: []
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { value: '', label: 'Select Category' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing & Accessories' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'sports', label: 'Sports & Outdoors' },
    { value: 'books', label: 'Books & Media' },
    { value: 'vehicles', label: 'Vehicles' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'toys', label: 'Toys & Games' },
    { value: 'other', label: 'Other' }
  ]

  const conditions = [
    { value: '', label: 'Select Condition' },
    { value: 'new', label: 'New' },
    { value: 'like-new', label: 'Like New' },
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' },
    { value: 'poor', label: 'Poor' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }))
  }

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = 'Listing title is required'
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Listing description is required'
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long'
    }

    if (!formData.price) {
      newErrors.price = 'Price is required'
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Please enter a valid price'
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category'
    }

    if (!formData.condition) {
      newErrors.condition = 'Please select the item condition'
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }

    if (!formData.contactEmail) {
      newErrors.contactEmail = 'Contact email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Creating listing:', formData)
      alert('Listing created successfully! (This is a demo)')
      setIsSubmitting(false)
      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        condition: '',
        location: '',
        contactEmail: '',
        contactPhone: '',
        images: []
      })
    }, 1500)
  }

  return (
    <div className="page-section">
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            Create New Listing
          </h1>
          
          <form onSubmit={handleSubmit} className="create-listing-form">
            {/* Basic Information */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Basic Information</h3>
              
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  Listing Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-input"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter a clear, descriptive title"
                />
                {errors.title && (
                  <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.title}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-textarea"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your item in detail. Include condition, features, and any relevant information..."
                />
                {errors.description && (
                  <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.description}
                  </div>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-input"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                      {errors.category}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="condition" className="form-label">
                    Condition *
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    className="form-input"
                    value={formData.condition}
                    onChange={handleChange}
                  >
                    {conditions.map(condition => (
                      <option key={condition.value} value={condition.value}>
                        {condition.label}
                      </option>
                    ))}
                  </select>
                  {errors.condition && (
                    <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                      {errors.condition}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="price" className="form-label">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-input"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                  {errors.price && (
                    <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                      {errors.price}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="location" className="form-label">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-input"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                  />
                  {errors.location && (
                    <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                      {errors.location}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Images */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Listing Images</h3>
              <div className="form-group">
                <label htmlFor="images" className="form-label">
                  Upload Images
                </label>
                <input
                  type="file"
                  id="images"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '2px dashed #e5e7eb', 
                    borderRadius: '0.5rem',
                    backgroundColor: '#f9fafb'
                  }}
                />
                <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem' }}>
                  Upload up to 10 images. JPG, PNG, or GIF format.
                </p>
                
                {formData.images.length > 0 && (
                  <div style={{ marginTop: '1rem' }}>
                    <h4 style={{ marginBottom: '0.5rem' }}>Uploaded Images:</h4>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {formData.images.map((file, index) => (
                        <div key={index} style={{ 
                          position: 'relative', 
                          border: '1px solid #e5e7eb', 
                          borderRadius: '0.25rem',
                          padding: '0.25rem'
                        }}>
                          <span style={{ fontSize: '0.875rem' }}>{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            style={{
                              position: 'absolute',
                              top: '-8px',
                              right: '-8px',
                              background: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '50%',
                              width: '20px',
                              height: '20px',
                              fontSize: '12px',
                              cursor: 'pointer'
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Contact Information</h3>
              
              <div className="form-group">
                <label htmlFor="contactEmail" className="form-label">
                  Contact Email *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="form-input"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
                {errors.contactEmail && (
                  <div style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.contactEmail}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contactPhone" className="form-label">
                  Contact Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  className="form-input"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <Link to="/listings" className="btn btn-secondary">
                Cancel
              </Link>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Listing...' : 'Create Listing'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateListing
