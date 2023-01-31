import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormUseStates from './components/FormUseStates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormUseStates></FormUseStates>
    </div>
  )
}

export default App
