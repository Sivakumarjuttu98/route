import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate =useNavigate()

  const backHome =()=> {
    navigate('/')
  }
  return (
    <div>
      <h1>Successfully Completed</h1>
    <button onClick={backHome}>Back to Home </button>

    </div>
  )
}

export default Success