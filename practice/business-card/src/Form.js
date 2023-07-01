import React from 'react'

export default function Form() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')

  console.log(firstName)

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='First Name'
        onChange={handleFirstNameChange}
      />
      <input
        type='text'
        placeholder='Last Name'
        onChange={handleLastNameChange}
      />
    </form>
  )
}
