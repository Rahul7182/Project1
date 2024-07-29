import React, { useState } from 'react'

const Task = () => {
    const [count,setCount] = useState(0)
    console.log(count)
    function increaseCount(){
        const getCount = count + 1
        setCount(getCount)
    }
  return (
    <>
        <button type='submit' onClick={increaseCount}>count</button>
    </>
  )
}

export default Task