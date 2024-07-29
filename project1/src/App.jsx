import { useState } from 'react'
import './App.css'
// import Task from './Task'
import Members from './Members'
import Numbers from './Numbers'
import Functions from './Functions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Task/> */}
      {/* <Members/> */}
      {/* <Numbers/> */}
      <Functions/>
    </>
  )
}

export default App
