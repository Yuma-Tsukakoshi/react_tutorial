import { useState } from 'react'
import './App.css'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{padding: "50px"}}>
      <h1 style={{ marginBottom: "20px"}}>Trello風アプリ</h1>
      <Main />
    </div>  
    </>
  )
}

export default App
