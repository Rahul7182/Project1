import React, { useState } from 'react'

const Members = () => {
    const [employeeDetails,setEmployeeDetails] = useState('')

    const members = ['Ram', 'Selva', 'Raju']
    console.log(members)
    members.push('Sam')
    console.log(members)

    const eachMem = members.map()
    console.log(eachMem)

    // for(let i=0;i < employeeDetails.length; i++){
    //     console.log(employeeDetails[i])
    //     setEmployeeDetails()
    // }
  return (
    <>
        <p>{members}</p>
    </>
  )
}

export default Members