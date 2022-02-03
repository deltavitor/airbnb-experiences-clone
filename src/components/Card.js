import React from "react"

import Star from "../images/star.svg"
import KatieZaferes from "../images/cards/katie-zaferes.png"

function Card() {
  return (
    <div>
      <img src={KatieZaferes}/>
      <div>
        <img src={Star}/>
        <p>5.0&nbsp;</p>
        <p>(6) •&nbsp;</p>
        <p>USA</p>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><strong>From $136</strong> / person</p>
    </div>
  )
}

export default Card
