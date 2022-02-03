import React from "react"

import Star from "../images/star.svg"

function Card(props) {
  return (
    <section className={'card'}>
      <img className={'card--image'} src={require('../images/cards/' + props.img)}/>
      <div className={'card--stats'}>
        <img className={'card--star'} src={Star}/>
        <p>{props.rating}</p>
        <p className={'text--gray'}>({props.reviewCount}) • {props.country}</p>
      </div>
      <p>{props.title}</p>
      <p><strong>From ${props.price}</strong> / person</p>
    </section>
  )
}

export default Card
