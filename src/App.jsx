import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import Programes from './components/Programs/Programes'
import Title from './components/Title/Title'
import { About } from './components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Subtitle' title='The title'/>
        <Programes/>
        <About/>
      </div>
    </div>
  )
}

export default App