import React from 'react'
import './Programes.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import worker from '../../assets/worker.png'

export const Programes = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={worker} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="icon for image 1" />
              <p>Image one info</p>
            </div>
        </div>
        <div className="program">
            <img src={worker} alt="" />
            <div className="caption">
              <img src={program_icon_2} alt="icon for image 2" />
              <p>Image two info</p>
            </div>
        </div>
        <div className="program">
            <img src={worker} alt="" />
            <div className="caption">
              <img src={program_icon_3} alt="icon for image 3" />
              <p>Image three info</p>
            </div>
        </div>
    </div>
  )
}

export default Programes