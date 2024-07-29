import React, { useEffect, useState } from 'react'

const Numbers = () => {
    const [button,setButton] = useState(false)

    useEffect(() => {
        setButton(true)
    },[oddEven])
    
    function oddEven(){
        for(let i=0;i<=20;i++){
            if(i%2 === 0){
                console.log('true')
            }else{
                console.log('false')
            }
        }
    }
    

  return (
    <>
        <button onClick={oddEven}>Execute</button>
    </>
  )
}

export default Numbers