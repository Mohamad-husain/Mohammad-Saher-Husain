import React from 'react'
import './MainSearch.css'

function MainSearch() {
  return (
  <div>
  <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
  <div className="search-container">
    <input type="text" name="search" placeholder="Search..." className="search-input" />
    <a href="#/" alt =" " className="search-btn">
      <i className="fas fa-search" />      
    </a>
  </div>
</div>

  )
}

export default MainSearch