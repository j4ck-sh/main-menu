import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

export const About = ({setPlayerState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayerState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT INFORMATION</h3>
            <h2>H2 TAG AREA</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim fugiat quisquam minus id harum deserunt voluptates quas, vel eligendi corrupti sint perferendis ipsum, corporis iure soluta culpa aperiam amet.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit harum voluptates non eos iusto veritatis doloremque quos, sed, deleniti repellendus sapiente voluptatum dolorem quam explicabo corrupti cum omnis eveniet veniam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum enim unde aliquid, magni eligendi aliquam obcaecati provident culpa in! Amet, cumque? Quidem vero error optio officiis fugit voluptatem reiciendis ipsam?</p>
        </div>
    </div>
  )
}
