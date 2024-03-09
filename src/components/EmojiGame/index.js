import './index.css'
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  playAgainBtn = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWinOrLose = emojisList.length === clickedEmojisList.length

    return (
      <WinOrLoseCard
        topScore={clickedEmojisList.length}
        isWinOrLose={isWinOrLose}
        onClickPlayAgain={this.playAgainBtn}
      />
    )
  }

  finishGameSetTopScore = currentScore => {
    const {clickedEmojisList} = this.state
    let newTopScore = clickedEmojisList.length

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickImoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiId = clickedEmojisList.includes(id)
    const emojiListLength = emojisList.length

    if (isEmojiId) {
      this.finishGameSetTopScore(emojiListLength)
    } else {
      if (emojiListLength - 1 === clickedEmojisList.length) {
        this.finishGameSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiLists = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            clickImoji={this.clickImoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          gameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojiLists() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
