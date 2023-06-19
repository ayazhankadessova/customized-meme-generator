import React from 'react'
import Body from './Body'

export default function Header(props) {
  /**
   * Challenge:
   * Raise state up a level and pass it down to both the
   * Header and Body components through props.
   */
  return <div>Current user : {props.user}</div>
}

{
  /* 
</div>
 <header>
 <p>Current user: {user}</p>
</header> */
}
