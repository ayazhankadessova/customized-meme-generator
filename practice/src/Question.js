import React from 'react'

export default function Question() {
  const [result, setResult] = React.useState('Hello')
  console.log(result)

  function handleClick() {
    setResult('Yes')

    console.log('I was clicked!')
  }

  return (
    <div className='state'>
      <h1 className='state--title'>Is state important to know?</h1>
      <div className='state--value'>
        <button onClick={handleClick}></button>
        <h1>{result}</h1>
        {/* <h1>Yes</h1> */}
      </div>
    </div>
  )
}
