import React, { useState } from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import Programes from './components/Programs/Programes'
import Title from './components/Title/Title'
import { About } from './components/About/About'
import { Campus } from './components/Campus/Campus'
import { Reviews } from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayerState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Subtitle' title='The title'/>
        <Programes/>
        <About setPlayerState={setPlayerState}/>
        <Title subTitle='Second subtitle' title='Second section title'/>
        <Campus/>
        <Title subTitle='Reviews Section' title='Reviews Section Title'/>
        <Reviews/>
        <Title subTitle='Contact Us' title='Get in touch with us'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayerState={setPlayerState} />
    </div>
  )
}


# when creating the next page maake sure to import the { route, routes, back-search } as these modules allow for the proper implementation of the nav bar

export default App