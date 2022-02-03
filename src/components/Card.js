import React from "react"

import Star from "../images/star.svg"
import KatieZaferes from "../images/cards/katie-zaferes.png"

function Card() {
  return (
    <section className={'card'}>
      <img className={'card--image'} src={KatieZaferes}/>
      <div className={'card--stats'}>
        <img className={'card--star'} src={Star}/>
        <p>5.0</p>
        <p className={'text--gray'}>(6) • USA</p>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><strong>From $136</strong> / person</p>
    </section>
  )
}

export default Card
