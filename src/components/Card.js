import React from "react"

import Star from "../images/star.svg"

function Card(props) {
  let badgeText
  if (props.openSpots === 0)
    badgeText = "SOLD OUT"
  else if (props.location === "Online")
    badgeText = "ONLINE"

  return (
    <article className={'card'}>
      {badgeText && <div className={'card--badge'}>{badgeText}</div>}
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
