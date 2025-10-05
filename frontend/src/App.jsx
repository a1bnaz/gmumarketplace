import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Listings from './pages/Listings'
import CreateListing from './pages/CreateListing'
import ListingDetails from './pages/ListingDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App