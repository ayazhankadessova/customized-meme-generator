function Form() {
  return (
    <main>
      <form className='meme--form'>
        <input type='text' className='form--input' placeholder='Part One' />
        <input type='text' className='form--input' placeholder='Part Two' />
        <button className='form--button'>Generate</button>
      </form>
    </main>
  )
}

export default Form
