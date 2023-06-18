import React from 'react'

export default function Counter() {
  const [result, setCount] = React.useState(0)

  function minus() {
    setCount(result - 1)
  }

  //    function add() {
  //      setCount(function (oldValue) {
  //        return oldValue + 1
  //      })
  //    }

  function plus() {
    setCount(result + 1)
  }

  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  return (
    <div className='counter'>
      <button className='counter--minus' onClick={minus}>
        –
      </button>
      <div className='counter--count'>
        <h1>{result}</h1>
      </div>
      <button className='counter--plus' onClick={plus}>
        +
      </button>
    </div>
  )
}
