import starFilled from './images/star-filled.png'
import starNot from './images/star-empty.png'

export default function Star(props) {
  const starIcon = props.isFilled ? starFilled : starNot

  return (
    <img
      src={starIcon}
      className='card--favorite'
      alt='star'
      onClick={props.handleClick}
    />
  )
}
