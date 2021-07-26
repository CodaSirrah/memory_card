import React from 'react'
import SHOW_HIDE from './Show_hide'

const Loser = (props) => {

  return(
    <div id='loser' className='message hidden'>
      <p>{props.losingMessage}</p>
      <button onClick={SHOW_HIDE.HIDE}>Play again?</button>
    </div>
  )
}

export default Loser
