import React from "react"

import Star from "../images/star.svg"

function Card(props) {
  return (
    <article className={'card'}>
      <img className={'card--image'} src={require('../images/cards/' + props.img)}/>
      <div className={'card--stats'}>
        <img className={'card--star'} src={Star}/>
        <p>{props.rating}</p>
        <p className={'text--gray'}>({props.reviewCount}) • {props.location}</p>
      </div>
      <p className={'card--title'}>{props.title}</p>
      <p className={'card--price'}><strong>From ${props.price}</strong> / person</p>
    </article>
  )
}

export default Card
