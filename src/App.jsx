import { useState } from 'react'
import './App.css'
import Header from './Header'

// Parent Component
function App() {


  const blogTitle = "My First Blog"
  const [count, setCount] = useState(0);



  return (
    <>
      <Header title={blogTitle} />
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </>

  )
}


export default App
