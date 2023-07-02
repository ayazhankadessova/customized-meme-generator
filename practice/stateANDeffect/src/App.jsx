import React from 'react'
import WindowTracker from './WindowTracker'

export default function App() {
  const [show, setShow] = React.useState(false)
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  console.log(show)

  return (
    <div className='container'>
      <button onClick={() => setShow((prevShow) => !prevShow)}>
        Toggle WindowTracker
      </button>
      {show == true && <WindowTracker />}
    </div>
  )
}
