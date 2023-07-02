// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Meme'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Navbar />
    <>
      <Navbar />
      <Form />
      <br />
      <Footer />
    </>
  )
}

export default App
