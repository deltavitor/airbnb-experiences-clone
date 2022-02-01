import React from 'react'

import PhotoGrid from '../images/photo-grid.png'

function Hero() {
  return (
    <div className={'hero'}>
      <img src={PhotoGrid} />
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero
