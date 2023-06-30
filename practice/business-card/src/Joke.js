import React from 'react'

export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  const [isShown, setShown] = React.useState(false)

  // we care for the prevSquares
  function toggle() {
    setShown((previsShown) => {
      return !previsShown
    })
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <h3>{props.punchline}</h3>}
      <button onClick={toggle}>Toggle</button>
      <hr />
    </div>
  )
}
