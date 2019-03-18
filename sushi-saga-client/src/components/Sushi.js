import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {id, img_url, name, price} = props.sushiObj
  return (
    <div className="sushi">
      <div className="plate"
           id={id}
           onClick={(e) => props.handleEatSushi(e)}>
           {props.eatenSushi.includes(props.sushiObj) ? null : <img src={img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
