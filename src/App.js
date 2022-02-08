import React from 'react'

import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Card from './components/Card.js'

import data from './data.js'

function App() {
  const cards = data.map(function(experience) {
    return <Card
      title = {experience.title}
      price = {experience.price}
      img = {experience.coverImg}
      rating = {experience.stats.rating}
      reviewCount = {experience.stats.reviewCount}
      location = {experience.location}
    />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  )
}

export default App
