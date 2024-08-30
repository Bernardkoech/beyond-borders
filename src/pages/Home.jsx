import React from 'react'
import Streaming from './Streaming'
import Pricing from '../components/Pricing'
import Events from '../components/Events'


const Home = () => {
  return (
    <div>
      <Streaming />
      <Pricing />
      <Events />
    </div>
  )
}

export default Home
