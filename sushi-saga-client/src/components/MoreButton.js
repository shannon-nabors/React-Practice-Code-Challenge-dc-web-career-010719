import React from 'react'

const MoreButton = (props) => {
  return (
    <button
      onClick={props.chooseDisplay}
    >
      More sushi!
    </button>
  )
}

export default MoreButton
