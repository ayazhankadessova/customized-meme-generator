import memesData from '../memes_src.js'
import React from 'react'

function Form() {
  const [memeImage, setMemeImage] = React.useState('')

  React.useState([])
  function randomImage() {
    const memesArray = memesData.data.memes
    const random = Math.floor(Math.random() * memesArray.length)
    console.log(random)
    const randomMeme = memesArray[random].url

    setMemeImage(randomMeme)
  }

  return (
    <main>
      <div className='meme--form'>
        <input type='text' className='form--input' placeholder='Part One' />
        <input type='text' className='form--input' placeholder='Part Two' />
        <button onClick={randomImage} className='form--button'>
          Generate
        </button>
      </div>
      <div className='form--pic--div'>
        <img src={memeImage} className='form--picture' />
      </div>
    </main>
  )
}

export default Form
