import React from "react"

import Star from "../images/star.svg"

function Card(props) {
  let badgeText
  if (props.item.openSpots === 0)
    badgeText = "SOLD OUT"
  else if (props.item.location === "Online")
    badgeText = "ONLINE"

  return (
    <article className={'card'}>
      {badgeText && <div className={'card--badge'}>{badgeText}</div>}
      <img className={'card--image'} src={require('../images/cards/' + props.item.coverImg)}/>
      <div className={'card--stats'}>
        <img className={'card--star'} src={Star}/>
        <p>{props.item.stats.rating}</p>
        <p className={'text--gray'}>({props.item.stats.reviewCount}) • {props.item.location}</p>
      </div>
      <p className={'card--title'}>{props.item.title}</p>
      <p className={'card--price'}><strong>From ${props.item.price}</strong> / person</p>
    </article>
  )
}

export default Card
