function Meme() {
  return (
    // <form onSubmit={this.handleSubmit}>
    <>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          placeholder='Email'
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    </>
  )
}

export default Meme
