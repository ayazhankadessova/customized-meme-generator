import React from 'react'

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)

  console.log('Component rendered')

  // 1. GET the data (fetch)
  // 2. Save the data to state

  React.useEffect(
    function () {
      if (count === 0) {
        return
      } else {
        console.log('Effect ran')
        fetch(`https://swapi.dev/api/people/${count}`)
          .then((res) => res.json())
          .then((data) => setStarWarsData(data))
      }
      console.log('Effect ran')
    },
    [count]
  )

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  )
}
