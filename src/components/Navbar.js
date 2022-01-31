import React from 'react'

import AirbnbLogo from '../images/airbnb-logo.svg'

function Navbar() {
  return (
    <nav className={'navbar'}>
      <img src={AirbnbLogo}/>
    </nav>
  )
}

export default Navbar
