import { useState } from 'react'
import reactLogo from '/ecms-logo.svg'
import viteLogo from '/ecms-logo.svg'
import './App.css'
import './login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ECMS</h1>
      <h2>Event Center Management System</h2>
      <div className="card">
        <button onClick={
          <a href="login.jsx"></a>
        }>
          Get Started 
        </button>
        <p>
          <a href="" target="_blank">Click here to register or login</a>
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </div>
  )
}

export default App
