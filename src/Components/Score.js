const Score = (props) => {
  return (
    <div id='score'>
      Score: {props.currentScore} | Best: {props.bestScore}
    </div>
  )
} 

export default Score
