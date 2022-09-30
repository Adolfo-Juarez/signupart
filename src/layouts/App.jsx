import { useState } from 'react'
import Catalogue from '../components/Catalogue'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Landing from '../components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Form/>
      </main>
      <Footer />
    </>
  )
}

export default App
