import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
      {props.displayedSushi.map(s => <Sushi key={s.id} sushiObj={s} handleEatSushi={props.handleEatSushi} eatenSushi={props.eatenSushi}/>)}
        <MoreButton
          chooseDisplay={props.chooseDisplay}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer
