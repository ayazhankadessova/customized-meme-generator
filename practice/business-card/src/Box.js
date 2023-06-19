import React from 'react'
import boxes from './boxes.js'
import BoxOwn from './BoxOwn.js'

export default function Box() {
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */

  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
    setSquares((prevSquares) => {
      const newSquares = prevSquares.map((square) => {
        if (square.id === id) {
          return {
            ...square,
            on: !square.on,
          }
        }
        return square
      })
      return newSquares
    })
    console.log('I was clicked!' + id)
  }

  const squareElements = squares.map((square) => (
    <BoxOwn
      className='box'
      key={square.id}
      on={square.on}
      toggle={toggle(square.id)}
    ></BoxOwn>
  ))

  return <main>{squareElements}</main>
}
