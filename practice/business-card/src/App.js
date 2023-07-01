import React from 'react'
import pic from './images/user.png'
import Header from './Header.js'
import Body from './Body.js'

import Star from './Star.js'
import Box from './Box.js'

import jokesData from './jokesData.js'
import Joke from './Joke'
import Form from './Form'

export default function App() {
  const [user, setUser] = React.useState('Joe')

  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: true,
  })

  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />
  })
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    setContact((prevState) => {
      return { ...prevState, isFavorite: !prevState['isFavorite'] }
    })
  }

  return (
    <div>
      <main>
        <article className='card'>
          <img src={pic} className='card--image' alt='card-img' />
          <div className='card--info'>
            {/* <img
            src={contact['isFavorite'] ? starFilled : starNot}
            className='card--favorite'
            onClick={toggleFavorite}
            alt='favorite'
          /> */}

            <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
            <h2 className='card--name'>{`${contact['firstName']} ${contact['lastName']}`}</h2>
            <p className='card--contact'>{contact['phone']}</p>
            <p className='card--contact'>{contact['email']}</p>
          </div>
        </article>
      </main>
      <Header user={user} />
      <Body user={user} />

      <Box mode={false}></Box>

      <div>{jokeElements}</div>
      <Form />
    </div>
  )
}
