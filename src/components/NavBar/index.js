import './index.css'

const NavBar = props => {
  const {currentScore, gameInProgress, topScore} = props
  return (
    <div className="nav-container">
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          className="logo-image" alt='emoji logo'
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {gameInProgress ? (
        <div className="container">
          <p className="name">Score: {currentScore}</p>
          <p className="name">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
export default NavBar
