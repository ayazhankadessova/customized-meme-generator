import React from 'react'

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    console.log('useEffect')
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', watchWidth)

    return function () {
      console.log('cleanup')
      window.removeEventListener('resize', watchWidth)
    }
  }, [])
  return <h1>Window width: {windowWidth}</h1>
}
