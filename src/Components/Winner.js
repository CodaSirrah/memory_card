import React from 'react'
import SHOW_HIDE from './Show_hide'

const WINNER = (props) => {
  return(
    <div id='winner' className='message hidden'>
      <p>{props.winningMessage}</p>
      <button onClick={SHOW_HIDE.HIDE}>Play Again?</button>
    </div>
  )
}

export default WINNER
