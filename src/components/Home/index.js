import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateSuccess =()=>{
    navigate('/success');
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={navigateSuccess}>submit</button>
    </div>
  )
}

export default Home