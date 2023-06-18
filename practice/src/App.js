import React from 'react'
import Question from './Question'
import Counter from './Counter'
import GoingOut from './GoingOut'

export default function App() {
  const [things, setThings] = React.useState(['Thing 1', 'Thing 2'])
  const [greeting, setGreeting] = React.useState('Good ')

  function changeGreeting(name) {
    const date = new Date()
    const hours = date.getHours()

    if (hours < 12) {
      setGreeting('Good Morning' + name)
    } else {
      setGreeting('Good Afternoon' + name)
    }
  }

  React.useEffect(() => {
    changeGreeting(' Bob!')
  }, [])

  function handleClick() {
    setThings((prevState) => [...prevState, `Thing ${things.length + 1}`])

    console.log('I was clicked!')
  }

  const thingList = things.map((thing) => <p key={thing}>{thing}</p>)

  function logWord() {
    console.log('Hovered!')
  }

  /**
   * Add our new function to the button
   */

  return (
    <div className='container'>
      <img src='https://picsum.photos/640/360' onMouseOver={logWord} />
      <button onClick={handleClick}>Click me</button>
      {thingList}
      <h1>{greeting}</h1>
      <Question />
      <Counter />
      <GoingOut />
    </div>
  )
}
