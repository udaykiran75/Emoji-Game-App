import './index.css'

const WinOrLoseCard = props => {
  const {isWinOrLose, topScore, onClickPlayAgain} = props

  const winOrLoseImage = isWinOrLose
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const winOrLoseText = isWinOrLose ? 'You Won' : 'You Lose'
  const scoreText = isWinOrLose ? 'Best Score' : 'Score'

  return (
    <div className="score-card-container">
      <img src={winOrLoseImage} className="display-image" alt='win or lose'/>
      <div className="score-container">
        <h1 className="heading">{winOrLoseText}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score">{topScore}/12</p>
        <button className="play-button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
