import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickImoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const emojiClicked = () => {
    clickImoji(id)
  }

  return (
    <li className="emoji-item" onClick={emojiClicked}>
      <button className="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard
