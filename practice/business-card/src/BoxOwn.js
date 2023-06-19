import React from 'react'

export default function BoxOwn(props) {
  //   const [mode, SetMode] = React.useState(props.on)

  //   function handleClick() {
  //     SetMode((prevMode) => !prevMode)
  //   }
  const color = props.on ? '#222222' : '#cccccc'

  const styles = {
    backgroundColor: color,
  }

  // onClick={()=>props.toggle(props.id)}
  return (
    <div className='box' style={styles} onClick={props.toggle}>
      <h1>{props.on ? 'Dark' : 'Light'}</h1>
    </div>
  )
}
