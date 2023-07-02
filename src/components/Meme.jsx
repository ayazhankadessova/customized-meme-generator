// import memesData from '../memes_src.js'
import React from 'react'

function Form() {
  const [allMemes, setAllMemes] = React.useState([])
  const [memeImage, setMemeImage] = React.useState({
    url: 'https://i.imgflip.com/1ur9b0.jpg',
    topText: '',
    bottomText: '',
  })

  function randomImage() {
    const memesArray = allMemes
    const random = Math.floor(Math.random() * memesArray.length)
    console.log(random)
    const randomMeme = memesArray[random].url

    setMemeImage((prevState) => {
      return { ...prevState, url: randomMeme }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMemeImage((prevState) => {
      return { ...prevState, [name]: value }
    })
    console.log(memeImage.bottomText)
  }

  React.useState(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
  }, [])

  return (
    <main>
      <div className='meme--form'>
        <input
          type='text'
          className='form--input'
          placeholder='Part One'
          name='topText'
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          className='form--input'
          placeholder='Part Two'
          name='bottomText'
          value={memeImage.bottomText}
          onChange={handleChange}
        />
        <button onClick={randomImage} className='form--button'>
          Generate
        </button>
      </div>
      <div className='meme'>
        <img src={memeImage.url} className='meme--image' />
        <h2 className='meme--text top'>{memeImage.topText}</h2>
        <h2 className='meme--text bottom'>{memeImage.bottomText}</h2>
      </div>
    </main>
  )
}

export default Form
