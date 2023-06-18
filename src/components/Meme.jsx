import memesData from '../memes_src.js'

function Form() {
  function randomImage() {
    const memesArray = memesData.data.memes
    const random = Math.floor(Math.random() * memesArray.length)
    console.log(random)
    const randomMeme = memesArray[random]
    console.log(randomMeme['url'])
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
    </main>
  )
}

export default Form
