import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Fetch from './Fetch'

// Parent Component
function App() {


  const blogTitle = "My First Blog"
  const [count, setCount] = useState(0); // state

  useEffect(() => {

    //  This code runs after every render
    // Unless we specify dependencies


    return () => {
      // cleanup function
    }
  })


  return (
    <>
      {/* <Header title={blogTitle} />
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button> */}
      <Fetch />
    </>

  )
}


export default App
