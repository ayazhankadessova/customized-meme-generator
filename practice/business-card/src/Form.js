import React from 'react'

// use one set Function
// make object of state

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    comments: '',
    isFriendly: true,
    employment: '',
    favColor: '',
  })

  console.log(formData.employment)

  function handleChange(event) {
    const { name, value, checked, type } = event.target
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === 'checkbox' ? checked : value }
    })

    // if (event.target.name === 'firstName') {
    //   setFormData({
    //     ...formData,
    //     firstName: event.target.value,
    //   })
    // } else {
    //   setFormData({
    //     ...formData,
    //     lastName: event.target.value,
    //   })
    // }

    // console.log(event.target.placeholder)

    // console.log(formData)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    // submitToApi(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        name='firstName'
        value={formData.firstName}
      />
      <input
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        name='lastName'
        value={formData.lastName}
      />
      <input
        type='email'
        placeholder='WorkEmail'
        onChange={handleChange}
        name='workEmail'
        value={formData.workEmail}
      />
      <textarea
        name='comments'
        onChange={handleChange}
        value={formData.comment}
      />
      <input
        type='checkbox'
        name='isFriendly'
        onChange={handleChange}
        checked={formData.isFriendly}
      />
      <label htmlFor='isFriendly'>Is Friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type='radio'
          id='unemployed'
          name='employment'
          value='unemployed'
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor='unemployed'>Unemployed</label>
        <br />

        <input
          type='radio'
          id='part-time'
          name='employment'
          value='part-time'
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor='part-time'>Part-Time</label>
        <br />

        <input
          type='radio'
          id='full-time'
          name='employment'
          value='full-time'
          checked={formData.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor='unemployed'>Full-time</label>
        <br />
      </fieldset>

      <label htmlFor='favColor'>What is your favorite color?</label>
      <br />
      <select
        id='favColor'
        value={formData.favColor}
        onChange={handleChange}
        name='favColor'
      >
        <option value=''>-- Choose --</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='indigo'>Indigo</option>
        <option value='violet'>Violet</option>
      </select>

      <button>Send</button>
    </form>
  )
}
