import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We are Global Awareness Technology</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus rerum fugiat dolores placeat laboriosam nisi, temporibus similique cupiditate beatae, nulla nam commodi! Fugit, quia autem explicabo iusto eligendi dolor? Id.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="arrow image" /></button>
        </div>
    </div>
  )
}

export default Hero